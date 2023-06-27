import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';

import { User } from '../models/user/user';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _http = inject(HttpClient);

  get(userId: number): Observable<User> {
    return this._http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      // .pipe(map((value) => UserSchema.parse(value)));
  }

  getSafe(userId: number): Observable<User> {
    return this._http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      // .pipe(tap((value) => console.log(UserSchema.safeParse(value))));
  }
}
