import { Component, Input, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/shared/types';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  year: string = '';
  @Input() lecturer: Lecturer = {};

  constructor() {
    console.log(this.lecturer);
  }

  ngOnInit(): void {
    console.log(this.lecturer);
    const date = new Date(this.lecturer.start_date!.replace('T', ' '));
    this.year = this.calculateAge(date).toString();
  }

  calculateAge(startDate: Date) {
    const startYear = startDate.getFullYear();
    console.log(startYear);
    const timeDiff = new Date().getFullYear() - startDate.getFullYear();
    console.log(timeDiff);
    return Math.floor(
      (new Date().getTime() - startDate.getTime()) / 12 / 30 / 24 / 3600 / 1000
    );
  }
}
