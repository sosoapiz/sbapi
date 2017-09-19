import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  err;

  _submitForm(event, value) {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[ i ].markAsDirty();
    }

    // console.log(value['username'], value['password']);
    this.authService.login(value['username'], value['password'], value['remember']).subscribe(
      ok => {
        this.gotoHome();
      },
      err => {
        this.err = err;
      }
    );
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

  gotoHome() {
    // TODO: 跳转到登录前页面
    this.router.navigate(['/']);
  }

}
