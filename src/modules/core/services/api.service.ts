import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces';
import { PaginationApiService } from './';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    return this.http
      .get('https://reqres.in/api/users?page=' + page)
      .pipe(
        map(response => {
          // response.json().data
          console.log(response);
          return response;
        })
      );
  }

  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<any> {
    return this.http
      .get(`https://reqres.in/api/users/${id}`)
      .pipe(
        map(response => {
          // response.json()
          console.log(response);
        })
      );
  }

}
