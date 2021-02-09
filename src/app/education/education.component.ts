import {Component, OnInit} from '@angular/core';
import {Education} from '../IEducation';
import {EducationService} from './education.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {

  educationList: Array<Education> = [];

  username = localStorage.getItem('user');

  onAddClick(): void {
    this.router.navigateByUrl(`education/${this.username}`);
  }

  constructor(private educationService: EducationService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  routeToEdit(id: number): void {
    this.router.navigateByUrl(`education/${this.username}/edit/${id}`);
  }

  ngOnInit(): void {
    if (this.username) {
      this.educationService.getEducations(this.username).subscribe(
        (data: Array<Education>) => {
          this.educationList = data;
          console.log(data);
        }
      );
    }
  }
}
