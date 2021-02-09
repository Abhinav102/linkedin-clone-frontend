import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Education} from '../IEducation';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  addEducation(educationForm: FormGroup): Observable<any>{
    return this.http.post<Education>('http://localhost:5003/education', JSON.stringify(educationForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  getEducations(username: string): Observable<any> {
    return this.http.get<Array<Education>>('http://localhost:5003/education', {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('user', username)
      }
      );
  }

  getEducation(id: string ): Observable<any> {
    return this.http.get<Education>(`http://localhost:5003/education/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  updateEducation(educationForm: FormGroup, id: string): Observable<any> {
    return this.http.put<any>(`http://localhost:5003/education/${id}`, JSON.stringify(educationForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  deleteEducation(id: string ): Observable<any> {
    return this.http.delete<any>(`http://localhost:5003/education/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  constructor(private http: HttpClient) {
  }

}
