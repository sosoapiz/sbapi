import { Injectable } from '@angular/core';
import { HttpInterceptor } from './http-interceptor';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
// import { CuiLayer } from 'consoleui';
import { HttpUtils } from '../http-utils';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(/*private dialog: CuiLayer*/) { }

    afterRequest(response: Response): Observable<Response> | Response {
        if (!response.ok) {
            // this.dialog.msg('common err');
            try {
                HttpUtils.handleError(response).subscribe(() => {},
                    error => {
                        // this.dialog.msg(error);
                    }
                );
            } catch (error) {
                // this.dialog.msg(error);
            }
        }
        return response;
    }
}
