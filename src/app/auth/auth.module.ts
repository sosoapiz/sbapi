import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './service/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
