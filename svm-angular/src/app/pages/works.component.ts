import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from '../models/project. model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  projects:ProjectModel[];

  constructor(private httpClient: HttpClient){
    this.projects = [];
  }

  ngOnInit(){
    this.httpClient.get("assets/json/web-projects.json").subscribe(data =>{
      Object.values(data).forEach( project => {
        this.projects.push(project);
      });
    })
  }
}
