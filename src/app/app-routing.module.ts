import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposearchComponent } from './reposearch/reposearch.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

const routes: Routes = [{path:"user-profile", component:GitsearchComponent},
{path:"user-profile", component:ReposearchComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
