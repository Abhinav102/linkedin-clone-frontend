import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../IAuth';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  getUser(username: string ): Observable<any> {
    return this.http.get<User>(`http://localhost:5003/user/${username}`,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  constructor(private http: HttpClient) {
  }

}
