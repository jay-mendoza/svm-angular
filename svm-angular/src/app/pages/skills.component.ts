import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillModel } from '../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: SkillModel[];
  certificates: string[];

  constructor(private httpClient: HttpClient){
    this.skills = [];
    this.certificates = [];
  }

  ngOnInit(){
    this.httpClient.get("assets/json/skills.json").subscribe(data =>{
      Object.values(data).forEach(skill => {
        skill.imageUrl = `assets/images/skills/${skill.id}.png`;
        this.skills.push(skill);
      });
    });

    this.httpClient.get("assets/json/certificates.json").subscribe(data =>{
      Object.values(data).forEach(certificate => {
        this.certificates.push(certificate);
      });
    });
  }
}
