import { Component, OnInit } from '@angular/core';
import { StudentView } from 'src/app/class/classViews';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  students : StudentView[] =[];
  displayedColumns = ['StudentId', 'Level'];
  dataSource = this.students;
  id = this.d.teacher.TeacherId;

  constructor(private service: HttpServiceService, private d: DataServiceService, private all: AllServiceService, private teacherService: TeacherServiceService) { }

  ngOnInit(): void {
    this.service.StudentsLevel(this.d.teacher.TeacherId).subscribe(
      (students) => {
        this.students = students;
        this.dataSource = students;
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );
  }
 
  //Adding student details to the teacher
  openDialogAdd(): void {
    this.teacherService.openDialogAdd();
  }

  //Adding score of the student
  openDialogAddScore(): void {
    this.teacherService.openDialogAddScore();
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
