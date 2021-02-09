import {Component, Input, OnInit} from '@angular/core';
import {User} from '../IAuth';
import {MainService} from './main.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user: User = {
    username: '',
    name: '',
    password: '',
    email: '',
    mobile: 0,
    description: '',
    roles: '',
    active: '',
  };

  username = localStorage.getItem('user');

  constructor(private mainService: MainService) {

  }

  ngOnInit(): void {
    if (this.username) {
      this.mainService.getUser(this.username).subscribe(
        (data: User) => {
          this.user = data;
        },
        (error: HttpErrorResponse) => console.log(error)
      );
    }

  }

}
