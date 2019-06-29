import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class UserListResolver implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const page: number = route.queryParams['page'] || 1;
    return this.userService.fetchUsers(page);
  }

}
