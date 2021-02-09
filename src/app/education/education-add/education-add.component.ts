import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EducationService} from '../education.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  addEducationForm: FormGroup = new FormGroup({
    college: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    startMonth: new FormControl(''),
    endMonth: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    user: new FormControl(''),
  });

  constructor(private activateRoute: ActivatedRoute, private router: Router, private educationService: EducationService) {
  }

  username: string | null = this.activateRoute.snapshot.paramMap.get('username');

  onSubmit(): void {
    this.educationService.addEducation(this.addEducationForm).subscribe(
      data => {
        console.log('Submitted successfully');
        this.router.navigateByUrl('profile');
      },
      error => console.log('Error occured')
    );
  }

  ngOnInit(): void {
    this.addEducationForm.patchValue({
      user: this.username,
    });
  }

}
