import { Component, Input } from '@angular/core';
import { ProjectModel } from '../models/project. model';


@Component({
  selector: 'app-hero-link',
  templateUrl: './hero-link.component.html',
  styleUrls: ['./hero-link.component.css']
})
export class HeroLinkComponent {
  @Input() project!: ProjectModel;
}
