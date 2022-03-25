import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentView, TeacherView } from 'src/app/class/classViews';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { DialogExistIDComponent } from '../dialog-exist-id/dialog-exist-id.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  hide = true;
  ID:any;
  status = 0;
  password1:any;
  password2:any;
  flag1 = "";
  flag2 = "";
  flagResponse = "";
  flag = true;
  passwordsGroup!: FormGroup;
  insertStudent: StudentView= new StudentView()
  studentResult:StudentView= new StudentView()
  insertTeacher: TeacherView= new TeacherView()
  teacherResult: TeacherView= new TeacherView()

  constructor( public dialog: MatDialog, private router: Router, private service: HttpServiceService, private data: DataServiceService) { }

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({'firstCtrl': new FormControl('', [Validators.required])
    });
    this.secondFormGroup =new FormGroup({'secondCtrl': new FormControl('', [Validators.required, Validators.pattern('[0-9]{9,9}')])
    });
    this.thirdFormGroup = new FormGroup({'thirdCtrl': new FormControl('',[Validators.required, Validators.pattern('[0-9]{6,10}')])
    });
    this.fourFormGroup = new FormGroup({'fourCtrl': new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,10}'), this.passwordValidators.bind(this)])
    });
  }

  //Validators on the passwords.
  passwordValidators(password : FormControl): { [errorPassword: string]: boolean } {  
    if (password.value != this.password1){
      // console.log("לא תואם")
      return { errorPassword: true }
      
    }
    // console.log("תואם")
    return { errorPassword: false };
  }

  //Saving ID
  clickID(){
    this.ID = this.secondFormGroup.get('secondCtrl')?.value;
  }
  //Saving status teacher or student.
  onclick1(st:number){
    this.status = st;
  }
  //Saving password 
  clickPassword1(){
    this.password1 = this.thirdFormGroup.get('thirdCtrl')?.value;
  }
  //Saving confirm password.
  clickPassword2(){
    this.password2 = this.fourFormGroup.get('fourCtrl')?.value;
  }
  //Entering the data into the system and entering the system
  onclick(): void{
    //Teacher
    if(this.status == 1){
      this.insertTeacher.Password = this.password1
      this.insertTeacher.TeacherId = this.ID
      //Check whether ID Exists in the system
      this.service
      .IsTeacherID(this.ID)
      .subscribe(
        (result : TeacherView) => {
          this.teacherResult = result
          if(this.teacherResult == null){
            this.data.teacher = this.teacherResult;
            //Teacher into the system
            this.service.InsertT(this.insertTeacher).subscribe(
              (result1: TeacherView) => {
                this.insertTeacher = result1;
                this.router.navigate(['/1']);
              },
              (err) => {
                console.log(err);
              }
            )
          }
          else{
            this.IDExist();
          }
        },
        (err) => {
        console.log(err)
        }
      ); 
    }
    //Student
    if(this.status == 2){
      this.insertStudent.StudentId = this.ID;
      this.insertStudent.Password = this.password1
      this.insertStudent.Level = 1
      this.insertStudent.TeacherRefId = ""
      this.service
      .IsStudentID(this.ID)
      .subscribe(
        (result : StudentView) => {
          this.studentResult = result
          if(this.studentResult == null){
            this.data.student = this.studentResult;
            this.service.InsertS(this.insertStudent).subscribe(
              (result1: StudentView) => {
                this.insertStudent = result1;
                this.router.navigate(['/2']);
              },
              (err) => {
                console.log(err);
              }
            )
          }
          else{
            this.IDExist();
          }
        },
        (err) => {
        console.log(err)
        }
      );
      }
    }

  //If ID already has a system
  IDExist(): void{
    this.dialog.open(DialogExistIDComponent,{
      width: '40%'
    });
  }

}
