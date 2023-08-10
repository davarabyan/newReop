import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = "ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });

        return next.handle(authReq).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    console.log(event.status);
                }
            }, error => {
                console.error(error.status);
                if (error.status === 404 ) {
                    this.router.navigate(['/notfound'])
                }
                if (error.status === 404 ) {
                    this.router.navigate(['/login'])
                }
                if (error.status > 500 ) {
                    this.router.navigate(['/ServerMaintence'])
                }
            })
        )
    }
}