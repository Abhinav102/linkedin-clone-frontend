import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Auth} from '../IAuth';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = {
    login: 'http://localhost:5003/user',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  signInToken(loginForm: FormGroup): Observable<any> {
    return this.http.get<Auth>(this.baseurl.login + `/${loginForm.value.username}`,  this.httpOptions)
      .pipe(
        retry(1),
        catchError(error => this.errorHandle(error))
      );
  }

  errorHandle(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) {
  }

}

