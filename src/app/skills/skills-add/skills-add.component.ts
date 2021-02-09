import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillsService} from '../skills.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {

  addSkillsForm: FormGroup = new FormGroup({
    language: new FormControl('', Validators.required),
    user: new FormControl(''),
  });

  constructor(private activeRoute: ActivatedRoute, private router: Router, private skillsService: SkillsService) {
  }

  username: string | null = this.activeRoute.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.addSkillsForm.patchValue({
      user: this.username,
    });
  }

  onSubmit(): void {
    this.skillsService.addSkills(this.addSkillsForm).subscribe(
      data => {
        this.router.navigateByUrl('profile');
      },
      error => console.log('Error occurred')
    );
  }

}
