import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../../interfaces';
import { PageEvent } from '@angular/material';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: UserInterface[] = [];
  currentPage: number;
  totalUsers: number;
  perPage: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const storagePage = StorageService.get('pagination.page');
    if (storagePage) {
      this.router.navigate(['./'], { queryParams: { page: storagePage } });
    }
    this.activatedRoute.data.pipe(
      map(data => data.users)
    )
      .subscribe((usersRequest: any) => {
        this.userList = usersRequest.data;
        this.currentPage = usersRequest.page - 1;
        this.totalUsers = usersRequest.total;
        this.perPage = usersRequest.per_page;
      });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    StorageService.set('pagination.page', this.currentPage + 1);
    this.router.navigate(['/users/' + user.id]);
  }

}
