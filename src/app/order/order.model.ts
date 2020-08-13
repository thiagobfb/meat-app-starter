export class Order {
  constructor(
    public address: string,
    public num: number,
    public optionalAddress: string,
    public paymentOption: string,
    public orderItems: OrderItem[]
  ) {}

}

export class OrderItem {
  constructor(public quantity: number, public menuId: string) {}
}
