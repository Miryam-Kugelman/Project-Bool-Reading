import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MarkView, StudentView } from 'src/app/class/classViews';
import { DialogAddScoreComponent } from 'src/app/components/teacher/dialog-add-score/dialog-add-score.component';
import { DialogAddStudentComponent } from 'src/app/components/teacher/dialog-add-student/dialog-add-student.component';
import { DialogDataErrorComponent } from 'src/app/components/teacher/dialog-data-error/dialog-data-error.component';
import { DialogExistTeacherComponent } from 'src/app/components/teacher/dialog-exist-teacher/dialog-exist-teacher.component';
import { DialogStudentNotExistComponent } from 'src/app/components/teacher/dialog-student-not-exist/dialog-student-not-exist.component';
import { DataServiceService } from '../data/data-service.service';
import { HttpServiceService } from '../http/http-service.service';

export interface DialogDataAdd {
  addId: string
}

export interface DialogDataAddScore {
  id: string
  score: number
  level: number
}

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  mark: MarkView = new MarkView;
  level: number = 0;
  id: string = "";
  score: number = 0;
  addId: string = "";
  addData! : DialogDataAdd;
  addScoreData! : DialogDataAddScore;
  updateStudent: StudentView = new StudentView;

  constructor(public dialog: MatDialog, private service: HttpServiceService, private data: DataServiceService, private router: Router,) { }

  //If the student already has a teacher
  teacherExist(): void{
    this.dialog.open(DialogExistTeacherComponent,{
      width: '40%'
    });
  }
 
  //If the student does not exist
  studentNotExist(): void{
    this.dialog.open(DialogStudentNotExistComponent,{
      width: '25%'
    });
  }

  //Adding student details to the teacher
  openDialogAdd(): void {
    const dialogRefAdd = this.dialog.open(DialogAddStudentComponent, {
      width: '30%',
      data: {addId : this.addId}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.addData = result;
      console.log("add id", this.addData.addId);
      this.addTeacherOfStudent();
    });  
  }

  //Adding score of the student
  openDialogAddScore(): void {
    const dialogRefAdd = this.dialog.open(DialogAddScoreComponent  , {
      width: '30%',
      data: {id: this.id,
        level: this.level,
        score: this.score}
    });
    dialogRefAdd.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.addScoreData = result;
      this.checkData();  
    });  
  }

  checkData(){
    this.service.IsStudentID(this.addScoreData.id)
    .subscribe(
      (result : StudentView) => {
        if(result == null || 
          this.addScoreData.score < 0 || this.addScoreData.score > 100 || 
          this.addScoreData.level > 6 || this.addScoreData.level < 1 ){
            this.dataError();
          }
          else{
            this.dataCoordinationCheck();
          }
      }
    )
  }

  //data coordination check
  dataCoordinationCheck(){
    this.service.levelIsStudent(this.addScoreData.id, this.addScoreData.level)
    .subscribe(
      (result: boolean) => {
        if(result == false){
          console.log("חוסר תאום בנתונים")
        }
        else{
          this.mark.MarkId = this.addScoreData.level;
          this.mark.MarkLevel = this.addScoreData.score;
          this.mark.StudentRefId = this.addScoreData.id;
          this.addScoreOfStudent();
        }
      }
    )
  }
  //Adding score of student
  addScoreOfStudent(){
    console.log("mark", this.mark)
    this.service
      .ifScore(this.mark.StudentRefId, this.mark.MarkId)
      .subscribe(
        (result: Boolean) => {
          console.log(result)
          if(result == true){
            this.service.updateScore(this.mark)
            .subscribe(
              (result1: MarkView) => {
                this.mark = result1;
                console.log("עודכן", this.mark)
              },
              (err) => {
                console.log(err);
              }
            )
          }
          else{
            console.log("false--")
            this.service.addScore(this.mark)
            .subscribe(
              (result1: MarkView) => {
                this.mark = result1;
                
              },
              (err) => {
                console.log(err);
              }
            )
          }
        },
        (err) => {
          console.log(err);
        }
      )
  }

  //Adding student details to the teacher
  addTeacherOfStudent(){
    this.service
      .IsStudentID(this.addData.addId)
      .subscribe(
        (result : StudentView) => {
          this.updateStudent = result
          if(this.updateStudent == null){
            this.studentNotExist();
          }
          else{
            if(this.updateStudent.TeacherRefId != null)
            {
              this.teacherExist();
            }
            else{
              this.updateStudent.TeacherRefId = this.data.teacher.TeacherId
              this.service.updateTeacher(this.updateStudent)
              .subscribe(
                (result1: StudentView) => {
                  this.updateStudent = result1;
                },
                (err) => {
                  console.log(err);
                }
              )
            }
          }
        },
        (err) => {
        console.log(err)
        }
      );
  }

  //Routing to the appropriate components
  onclick( action:number){
    if( action == 1){
      this.router.navigate(['/all-students'])
    }
    if( action == 2){
      this.router.navigate(['/level-student'])
    }
    if( action == 3){
      this.router.navigate(['/gread-student'])
    }
    if( action == 4){
      this.router.navigate(['/average'])
    } 
  }
  
  //If one of the data entered is incorrect
  dataError(){
    this.dialog.open(DialogDataErrorComponent,{
      width: '25%'
    }); 
  }
  
}
