import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAComponent} from './view-a/view-a.component';
import {ViewBComponent} from './view-b/view-b.component';
import {MainComponent} from './layout/main/main.component';

const routes: Routes = [
  {
    path: 'app1',
    component: MainComponent,
    children: [
      { path: 'test', loadChildren: 'projects/app1/src/app/test/test.module#TestModule' },
      { path: 'a', component: ViewAComponent },
      { path: 'b', component: ViewBComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
