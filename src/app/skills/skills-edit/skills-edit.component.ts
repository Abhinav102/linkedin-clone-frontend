import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillsService} from '../skills.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Skills} from '../../ISkills';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  @Input()
  skillsDetail!: Skills;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private skillsService: SkillsService) {
  }

  id: string | null = this.activeRoute.snapshot.paramMap.get('id');

  editSkillsForm: FormGroup = new FormGroup({
    language: new FormControl('', Validators.required),
    user: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.id) {
      this.skillsService.getSkill(this.id).subscribe(
        (data: Skills) => {
          this.skillsDetail = data;
          this.editSkillsForm.patchValue({
            language: this.skillsDetail.language?.url,
            user: this.skillsDetail.user
          });
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.log('error')
      );

    }
  }

  onDelete(): void {
    if (this.id) {
      this.skillsService.deleteSkills(this.id).subscribe(
        data => {
          console.log('Deleted', this.id);
          this.router.navigateByUrl('profile');
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.log('error occured')
      );
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.skillsService.updateSkills(this.editSkillsForm, this.id).subscribe(
        data => {
          console.log('Submitted Successfully');
          this.router.navigateByUrl('profile');
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.log('error occured')
      );
    }
  }

}
