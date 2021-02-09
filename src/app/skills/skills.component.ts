import {Component, OnInit} from '@angular/core';
import {Skills} from '../ISkills';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillsService} from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillsList: Array<Skills> = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private skillsService: SkillsService) {
  }

  username = localStorage.getItem('user');

  onAddClick(): void {
    this.router.navigateByUrl(`skills/${this.username}`);
  }

  routeToEdit(id: number): void {
    this.router.navigateByUrl(`skills/${this.username}/edit/${id}`);
  }

  onDelete(id: number): void {
      this.skillsService.deleteSkills(`${id}`).subscribe(
        data => {
          console.log('Deleted', id);
          this.ngOnInit();
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.log('error occured')
      );
  }

  ngOnInit(): void {
    if (this.username) {
      this.skillsService.getSkills(this.username).subscribe(
        (data: Array<Skills>) => {
          this.skillsList = data;
          console.log(data);
        },
        error => console.log(error)
      );
    }

  }
}
