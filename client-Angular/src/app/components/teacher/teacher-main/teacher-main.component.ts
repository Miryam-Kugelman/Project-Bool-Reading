import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss']
})
export class TeacherMainComponent implements OnInit {
  
  id = this.data.teacher.TeacherId;

  constructor( private all: AllServiceService, private teacherService: TeacherServiceService, private data: DataServiceService) { }

  ngOnInit(): void {   
  }

  //Adding score of the student
  openDialogAddScore(): void {
    this.teacherService.openDialogAddScore();
  }
  
  //Adding student details to the teacher
  openDialogAdd(): void {
    this.teacherService.openDialogAdd();
  }

  //Routing to the home page
  exit(){
      this.all.exit();
  }
   
  //Routing to the appropriate components
  onclick( action:number){
    this.teacherService.onclick(action);
  }

}
