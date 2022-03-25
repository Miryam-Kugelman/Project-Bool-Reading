import { Injectable } from '@angular/core';
import { StudentView, TeacherView } from 'src/app/class/classViews';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  student: StudentView = new StudentView();
  teacher: TeacherView = new TeacherView();
  
  constructor() { }
}
