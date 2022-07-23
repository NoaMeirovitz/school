export interface Lecturer {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  start_date?: string;
  photo?: string;
}

export interface Course {
  course_code: number;
  name?: string;
  course_description: string;
  price?: number;
  start_date?: string;
  classes_number?: string;
  category?: string;
  lecturer?: string;
}

export type sortColumn = 'course.name' | 'course.price';

export interface CourseSort {
  column: sortColumn;
  dirAsc: boolean;
}
