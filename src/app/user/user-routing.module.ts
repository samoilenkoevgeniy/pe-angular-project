import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListResolver, UserShowResolver } from './resolvers';
import { UserListComponent, UserShowComponent } from './components';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      users: UserListResolver,
    },
    component: UserListComponent
  },
  {
    path: ':id',
    resolve: {
      user: UserShowResolver,
    },
    component: UserShowComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
