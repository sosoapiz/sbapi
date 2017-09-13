import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
    ]
  },
  {
    path: '', children: [
      { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
