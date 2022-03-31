import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { WorksComponent } from './pages/works.component';
import { SkillsComponent } from './pages/skills.component';

import { HeroLinkComponent } from './shared/hero-link.component';
import { NavMenuComponent } from './shared/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    HeroLinkComponent,
    NavMenuComponent,
    SkillsComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
