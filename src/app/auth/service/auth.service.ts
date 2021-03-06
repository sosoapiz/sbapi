import { HttpAdaptor } from './../../core/http/http-adaptor';
import { UserInfo } from './../entity/user-info';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    userInfo: UserInfo;

    constructor(private httpAdaptor: HttpAdaptor) { }

    login(username, passwd, autoLogin?): Observable<UserInfo> {
        let url = '/api/ldap/login';
        let formData = new FormData();
        formData.append('loginName', username);
        formData.append('passwd', passwd);
        formData.append('autoLogin', autoLogin);
        return this.httpAdaptor.post(url, formData).map((userInfo) => {
            this.userInfo = userInfo;
            return userInfo;
        });
    }

    logout(): Observable<any> {
        let url = '/api/logout';
        return this.httpAdaptor.get(url).map(() => {
            this.userInfo = null;
        });
    }

    isLogin() {
        return !!this.userInfo;
    }

    state(): Observable<boolean> {
        let url = '/api/state';
        return this.httpAdaptor.get(url).map((userInfo) => {
            this.userInfo = userInfo;
            return true;
        }).catch((err) => {
            return Observable.of(false);
        });
    }
}
