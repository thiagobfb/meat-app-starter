import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs/observable/timer';
import { switchMap, tap } from 'rxjs/internal/operators';
import 'rxjs/operator/do';
import 'rxjs-compat/add/observable/timer';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message = 'Hello There!'
  snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // @ts-ignore
    this.notificationService.notifier.pipe(
      tap(message => {
        this.message = message;
        this.snackVisibility = 'visible';
      }),
      switchMap(message => Observable.timer(3000))
      // tslint:disable-next-line:no-shadowed-variable
      ).subscribe(timer => this.snackVisibility = 'hidden');
  }

}
