import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Education} from '../IEducation';

@Injectable({
  providedIn: 'root'
})
export class EducationService{
  configUrl = 'education.json';

  // tslint:disable-next-line:typedef
  getEducation() {
    return this.http.get<Array<Education>>(this.configUrl);
  }

  constructor(private http: HttpClient) {
  }

}
