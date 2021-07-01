import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'

})

export class NotificationService {

   public notificationURL = 'http://localhost:3000/subscribe';

   constructor(private _http: HttpClient) { }

   postSubscription(sub: PushSubscription) {
      return this._http.post(this.notificationURL, sub).pipe(catchError(this.handlError));
   }
   handlError(error) {
      return throwError(error.error.message);
   }
}
