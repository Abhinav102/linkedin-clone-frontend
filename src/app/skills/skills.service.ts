import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Skills} from '../ISkills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  addSkills(skillsForm: FormGroup): Observable<any> {
    return this.http.post<Skills>('http://localhost:5003/skills', JSON.stringify(skillsForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  getSkills(username: string ): Observable<any> {
    return this.http.get<Array<Skills>>('http://localhost:5003/skills',
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('user', username)
      }
    );
  }

  getSkill(id: string ): Observable<any> {
    return this.http.get<Skills>(`http://localhost:5003/skills/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  updateSkills(experienceForm: FormGroup, id: string): Observable<any> {
    return this.http.put<Skills>(`http://localhost:5003/skills/${id}`, JSON.stringify(experienceForm.value),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    );
  }

  deleteSkills(id: string ): Observable<any> {
    return this.http.delete<any>(`http://localhost:5003/skills/${id}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  constructor(private http: HttpClient) {

  }
}
