import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';
import { DialogLevelStudentComponent } from '../dialog-level-student/dialog-level-student.component';

export interface DialogData {
  id: string;
  level: number;
}

@Component({
  selector: 'app-level-student',
  templateUrl: './level-student.component.html',
  styleUrls: ['./level-student.component.scss']
})
export class LevelStudentComponent implements OnInit {

  flag! : boolean;
  id! : string ;
  level! : number;
  score!: number;
  data! : DialogData; 
  idT = this.d.teacher.TeacherId;

  constructor(private service: HttpServiceService, private d: DataServiceService, public dialog: MatDialog, private all: AllServiceService, private teacherService: TeacherServiceService) { }

  ngOnInit(): void {
  }

  //Adding student details to the teacher
  openDialogAdd(): void {
    this.teacherService.openDialogAdd();
  }

  //Opening a dialogue to get an ID And level
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLevelStudentComponent, {
      width: '250px',
      data: {id: this.id, level: this.level},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      this.ifExist(this.data.id, this.data.level);
    });
  }

  //Adding score of the student
  openDialogAddScore(): void {
    this.teacherService.openDialogAddScore();
  }
  
  //Check whether the ID number And the level exists in the system
  ifExist(studentId: string, studentLevel: number){
    this.service.IsTeacherWithLevel(studentId, this.d.teacher.TeacherId, studentLevel)
    .subscribe(
      (result) => {
        this.flag = result;
        if(this.flag == true){
          this.getScore(studentId, studentLevel);
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

  //Obtaining the grade from the server
  getScore(studentId: string, studentLevel: number){
    this.service.StudentLevelWithScore(studentId, studentLevel)
    .subscribe(
      (result) => {
        this.score = result;
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
