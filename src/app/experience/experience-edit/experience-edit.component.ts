import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../IExperience';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienceService} from '../experience.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  @Input()
  experienceDetail!: Experience;


  constructor(private activatedRoute: ActivatedRoute, private experienceService: ExperienceService, private router: Router) {
  }

  id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

  editExperienceForm: FormGroup = new FormGroup({
    company: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    startMonth: new FormControl(''),
    endMonth: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    user: new FormControl(''),
  });

  onDelete(): void {
    if (this.id) {
      this.experienceService.deleteExperience(this.id).subscribe(
        data => {
          console.log('deleted ', this.id);

          this.router.navigateByUrl('profile');
        },
        error => console.log('erorr occured')
      );
    }
  }

  ngOnInit(): void {
    if (this.id) {
      this.experienceService.getExperience(this.id).subscribe(
        (data: Experience) => {
          this.experienceDetail = data;
          this.editExperienceForm.patchValue({
            company: this.experienceDetail.company?.url,
            role: this.experienceDetail.role,
            startMonth: this.experienceDetail.startMonth,
            endMonth: this.experienceDetail.endMonth,
            duration: this.experienceDetail.duration,
            description: this.experienceDetail.description,
            location: this.experienceDetail.location,
            user: this.experienceDetail.user,
          });
        },
        error => console.log('error')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.experienceService.updateExperience(this.editExperienceForm, this.id).subscribe(
        data => {
          console.log('Submitted successfully');
          this.router.navigateByUrl('profile');
        },
        error => console.log('Error occured')
      );
    }
  }
}
