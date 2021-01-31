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

  constructor(private http: HttpClient) {
  }

  baseurl = {
    login: 'http://localhost:5002/user',
    signup: 'http://localhost:5002/signup',
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

  // signOut(): Observable<any> {
  //   return this.http.get<any>(this.baseurl + '/signout')
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandle)
  //     );
  // }

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

}

