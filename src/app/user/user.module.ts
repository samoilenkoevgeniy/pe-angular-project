import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { UserListComponent, UserShowComponent } from './components';
import { UserListResolver, UserShowResolver } from './resolvers';

@NgModule({
  declarations: [UserListComponent, UserShowComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    UserListResolver, UserShowResolver
  ]
})
export class UserModule { }
