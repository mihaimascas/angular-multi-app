import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAComponent} from './view-a/view-a.component';
import {ViewBComponent} from './view-b/view-b.component';

const routes: Routes = [
  { path: 'app2/a', component: ViewAComponent },
  { path: 'app2/b', component: ViewBComponent },
  { path: 'app2', redirectTo: 'app2/a' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
