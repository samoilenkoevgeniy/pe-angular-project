import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  user: UserInterface;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.user)
    )
      .subscribe((usersRequest: any) => {
        this.user = usersRequest.data;
      });
  }

  back() {
    return this.router.navigate(['/users']);
  }

}
