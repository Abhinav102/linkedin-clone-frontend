import {Component, OnInit} from '@angular/core';
import {Experience} from '../IExperience';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../IAuth';
import {ExperienceService} from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

  experienceList: Array<Experience> = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private experienceService: ExperienceService) {
  }


  username = localStorage.getItem('user');

  onAddClick(): void {
    this.router.navigateByUrl(`experience/${this.username}`);
  }

  routeToEdit(id: number): void {
    this.router.navigateByUrl(`experience/${this.username}/edit/${id}`);
  }

  ngOnInit(): void {
    if (this.username) {
      this.experienceService.getExperiences(this.username).subscribe(
        (data: Array<Experience>) => {
          this.experienceList = data;
          console.log(data);
        },
        error => console.log(error)
      );
    }

  }
}
