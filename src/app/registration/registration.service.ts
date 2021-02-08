import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../IAuth';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {


  onCreateRegister(registerForm: FormGroup): Observable<any> {
    return this.http.post<User>(
      'http://localhost:5003/user',
      JSON.stringify(registerForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    )
      .pipe(
        retry(1),
        catchError(error => this.errorHandling(error))
      );
  }

  errorHandling(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) {
  }

}

