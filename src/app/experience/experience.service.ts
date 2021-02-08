import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {User} from '../IAuth';
import {catchError, retry} from 'rxjs/operators';
import {Experience} from '../IExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  addExperience(experienceForm: FormGroup): Observable<any> {
    return this.http.post<Experience>('http://localhost:5003/experience', JSON.stringify(experienceForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  getExperiences(username: string ): Observable<any> {
    return this.http.get<Array<Experience>>('http://localhost:5003/experience',
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('user', username)
      }
    );
  }

  getExperience(id: string ): Observable<any> {
    return this.http.get<Experience>(`http://localhost:5003/experience/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  updateExperience(experienceForm: FormGroup, id: string): Observable<any> {
    return this.http.put<Experience>(`http://localhost:5003/experience/${id}`, JSON.stringify(experienceForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  deleteExperience(id: string ): Observable<any> {
    return this.http.delete<any>(`http://localhost:5003/experience/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  constructor(private http: HttpClient) {

  }
}
