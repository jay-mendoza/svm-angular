import { Component } from '@angular/core';
import { ProjectModel } from '../models/project. model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  /**
   * 
   */
  project: ProjectModel = {
    title: 'Jay Mendoza | LinkedIn',
    description: 'This is just a link to my LinkedIn profile page. My LinkedIn profile ID is "STATICVOIDMAIN".',
    imageUrl: 'assets/images/linkedin-profile.jpg',
    linkHref: 'https://www.linkedin.com/in/staticvoidmain/',
    isPro: false,
    devComment: ''
  };  
}
