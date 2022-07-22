import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsSoftSkillsComponent } from './components/skills-soft-skills/skills-soft-skills.component';
import { WorkComponent } from './components/work/work.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeIllustrationComponent } from './components/about-me-illustration/about-me-illustration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    HeaderTitleComponent,
    AboutMeComponent,
    SkillsSoftSkillsComponent,
    WorkComponent,
    FooterComponent,
    AboutMeIllustrationComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
