import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {

  level: number = 0;
  id = this.data.student.StudentId;

  constructor(private studentService: StudentServiceService, private data: DataServiceService, private all: AllServiceService) { }

  ngOnInit(): void {
    this.level = this.data.student.Level;
  }

  //Routing to the home page
  exit(){
    this.all.exit();
  }
  
  //Routing to page
  onclick(st: number){
    this.studentService.onclick(st);
  }

}
