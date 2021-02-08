import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';
import {User} from '../IAuth';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) {
  }

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    active: new FormControl(true),
    roles: new FormControl(''),
    description: new FormControl('', Validators.required),
  });

  // tslint:disable-next-line:typedef
  fetchRegistration(registerForm: FormGroup) {
    this.registrationService.onCreateRegister(registerForm)
      .subscribe(
        (data: User) => {
          localStorage.setItem('user', registerForm.value.username);
          console.log(data);
          this.router.navigateByUrl('profile');
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.fetchRegistration(this.registerForm);
  }


}
