import * as jsonServer from 'json-server';
import * as fs from 'fs';
import * as https from 'https';
import { handleAuthentication } from './auth';
import { handleAuthorization } from './authz';
import * as cors from 'cors';


const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(cors())
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// middleware para login
server.post('/login', handleAuthentication)

// middleware para autorização
server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
}

const port = 3001;
https.createServer(options, server).listen(port, () => {
  console.log(`JSON Server is running on https://localhost:${port}`)
})
