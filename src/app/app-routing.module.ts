import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AuthGuard } from './auth/service/auth-guard.service';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
    ]
  },
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'project', loadChildren: 'app/project/project.module#ProjectModule' },
      { path: 'document', loadChildren: 'app/document/document.module#DocumentModule' },
    ],
  },
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'help', loadChildren: 'app/help/help.module#HelpModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
