import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { User, UserSchema } from '../models/user/user-schema';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _http = inject(HttpClient);

  get(userId: number): Observable<User> {
    return this._http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .pipe(
        tap({
          next: (value) => UserSchema.parse(value),
        })
      );
  }
}
