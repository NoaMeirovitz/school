import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturersModule } from './lecturers/lecturers/lecturers.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LecturersModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
