import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Auth, User} from '../IAuth';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signIn(loginForm: FormGroup): void {
    this.authService.onLogin(this.loginForm).subscribe(
      (data: User) => {
        if (data.password === this.loginForm.value.password) {
          localStorage.setItem('user', loginForm.value.username);
          console.log(data);
          this.router.navigateByUrl(`profile`);
        } else {
          this.router.navigateByUrl(`login`);
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.signIn(this.loginForm);
  }


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }
}
