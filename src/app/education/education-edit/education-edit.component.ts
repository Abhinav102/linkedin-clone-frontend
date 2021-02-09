import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../../IEducation';
import {ActivatedRoute, Router} from '@angular/router';
import {EducationService} from '../education.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  @Input()
  educationDetail!: Education;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private educationService: EducationService) {
  }

  id: string | null = this.activeRoute.snapshot.paramMap.get('id');

  editEducationForm: FormGroup = new FormGroup({
    college: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    startMonth: new FormControl(''),
    endMonth: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    user: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.id) {
      this.educationService.getEducation(this.id).subscribe(
          (data: Education) => {
          this.educationDetail = data;
          this.editEducationForm.patchValue({
            college: this.educationDetail.college?.url,
            course: this.educationDetail.course,
            startMonth: this.educationDetail.startMonth,
            endMonth: this.educationDetail.endMonth,
            duration: this.educationDetail.duration,
            description: this.educationDetail.description,
            location: this.educationDetail.location,
            user: this.educationDetail.user,
          });
        },
        error => console.log('error')
      );
    }
  }

  onDelete(): void {
    if (this.id) {
      this.educationService.deleteEducation(this.id).subscribe(
        data => {
          console.log('deleted ', this.id);

          this.router.navigateByUrl('profile');
        },
        error => console.log('erorr occured')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.educationService.updateEducation(this.editEducationForm, this.id).subscribe(
        data => {
          console.log('Submitted successfully');
          this.router.navigateByUrl('profile');
        },
        error => console.log('Error occured')
      );
    }
  }

}
