import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-app';

  constructor() {
    type HttpResponse = { code: number , data: string};

    const observable = new Observable<HttpResponse>(subscriber => {
      console.log('Test-Subscriber');
      subscriber.next({code: 500, data: 'First Data.....'});
      subscriber.next({code: 400, data: 'Second Data.....'});
      subscriber.next({code: 300, data: 'Third Data.....'});
      subscriber.next({code: 200, data: 'Fourth Data.....'})
      setTimeout(() => {
        subscriber.next({code: 100, data: 'Fifth Data.....'});
        subscriber.complete();
      }, 5000);
      console.log('Susbscriber stops here!');
    });

    observable.subscribe({
      next(response: HttpResponse) {
        console.log('got my response: ', response);
      },error(error:any){
          
      }
    })

  }
}

