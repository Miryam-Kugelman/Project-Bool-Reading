import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkView } from 'src/app/class/classViews';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';
import { DialogData, DialogGreadStudentComponent } from '../dialog-gread-student/dialog-gread-student.component';

@Component({
  selector: 'app-gread-student',
  templateUrl: './gread-student.component.html',
  styleUrls: ['./gread-student.component.scss']
})
export class GreadStudentComponent implements OnInit {

  value = "";
  marks : MarkView[] =[];
  flag! : boolean;
  id! : string ;
  data! : DialogData;
  displayedColumns = ['Level', 'Mark'];
  dataSource = this.marks;
  table! : boolean;
  idT = this.d.teacher.TeacherId;

  constructor(private teacherService: TeacherServiceService, private all: AllServiceService, private service: HttpServiceService, private d: DataServiceService, public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  
  //Adding student details to the teacher
  openDialogAdd(): void {
    this.teacherService.openDialogAdd();
  }

  //Adding score of the student
  openDialogAddScore(): void {
    this.teacherService.openDialogAddScore();
  }
  
  //Opening a dialogue to insert ID Of a student for the grade system
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogGreadStudentComponent, {
      width: '250px',
      data: {id: this.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      
      this.ifExist(this.data.id);
    });
  }

  //Check if the student exists and the array can be accepted
  ifExist(studentId: string){
    this.service.IsTeacherExist(studentId, this.d.teacher.TeacherId)
    .subscribe(
      (result) => {
        this.flag = result;
        if(this.flag == true){
          this.getScores(studentId);
        }
        else{
          this.teacherService.dataError();
        }
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );
  }

  //Receipt of the score system
  getScores(studentId: string){
    this.service.StudentMarks(studentId)
    .subscribe(
      (result) => {
        this.marks = result;
        this.dataSource = this.marks;
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );
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
