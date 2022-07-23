import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Course, CourseSort, sortColumn } from 'src/app/shared/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  tableSort!: CourseSort;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
    this.tableSort = {
      column: 'course.name',
      dirAsc: true,
    };
  }

  getCourses() {
    console.log('getCourses');
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Course>) => {
        console.log(data);
        this.courses = data;
      },
      error: (err) => console.error(err),
    });
  }

  sortCourses(column: sortColumn) {
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }

    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';

    this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.error(err),
    });
  }

  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi-chevron-up' : 'bi-chevron-down';
    }
    return 'bi-chevron-expand';
  }
}
