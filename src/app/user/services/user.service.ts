import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

import { UsersRequestInterface } from '../interfaces/users-request.interface';
import { UserRequestInterface } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(http: HttpClient) {
    super('/users', http);
  }

  fetchUsers(page): Observable<UsersRequestInterface> {
    return this.get('/?page=' + page);
  }

  fetchUserById(id: number): Observable<UserRequestInterface> {
    return this.get(`/${id}`);
  }
}
