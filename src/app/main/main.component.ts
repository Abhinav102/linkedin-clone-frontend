import { Component, Input, OnInit } from '@angular/core';
import { User } from '../IAuth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user : User =
    {
      id: 8,
      username: '@messi',
      name: 'messi',
      password: 'messi',
      email: 'messi@gmail.com',
      mobile: 9943253053,
      description: 'NA',
      roles: 'Full stack developer',
      active: 'NA',
  }

  constructor() { }

  ngOnInit(): void {}
}
