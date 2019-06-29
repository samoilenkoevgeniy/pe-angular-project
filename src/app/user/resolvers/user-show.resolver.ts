import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class UserShowResolver implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const id: number = route.params['id'];
    return this.userService.fetchUserById(id);
  }

}
