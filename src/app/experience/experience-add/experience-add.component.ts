import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienceService} from '../experience.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {

  addExperienceForm: FormGroup = new FormGroup({
    company: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    startMonth: new FormControl(''),
    endMonth: new FormControl(''),
    duration: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    user: new FormControl(''),
  });

  constructor(private activeRoute: ActivatedRoute, private experienceService: ExperienceService,
              private router: Router) {
  }

  username: string | null = this.activeRoute.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.addExperienceForm.patchValue({
      user: this.username,
    });
  }

  onSubmit(): void {
    this.experienceService.addExperience(this.addExperienceForm).subscribe(
      data => {
        console.log('Submitted successfully');
        this.router.navigateByUrl('profile');
      },
      error => console.log('Error occured')
    );
  }

}
