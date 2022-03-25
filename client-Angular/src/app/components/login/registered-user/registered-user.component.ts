import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentView, TeacherView } from 'src/app/class/classViews';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.scss']
})
export class RegisteredUserComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup; 
  
  hide = true;
  ID:any;
  password:any;
  studentResult: StudentView = new StudentView()
  teacherResult: TeacherView = new TeacherView()

  constructor(private router: Router, private service: HttpServiceService, private data: DataServiceService, private teacherService: TeacherServiceService) { }

  ngOnInit(): void {
    this.firstFormGroup =new FormGroup({'firstCtrl': new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)])
    });
    this.secondFormGroup = new FormGroup({'secondCtrl': new FormControl('',[Validators.required, Validators.pattern('[0-9]{6,10}')])
    }); 
  }

  //Saving ID
  clickID(){
    this.ID = this.firstFormGroup.get('firstCtrl')?.value;
  }
  //Saving password
  clickPassword(){
    this.password = this.secondFormGroup.get('secondCtrl')?.value;
  }
  //Login to the system
  onclick(): void {
    this.service
    .IsStudent(this.ID,this.password)
    .subscribe(
      (result: StudentView) => {
        this.studentResult = result
        if(this.studentResult == null){
          this.service
          .IsTeacher(this.ID, this.password)
          .subscribe(
            (result : TeacherView) => {
              this.teacherResult = result
              if(this.teacherResult == null){
                this.teacherService.dataError();
              }
              else{
                this.data.teacher.Password = this.password;
                this.data.teacher.TeacherId = this.ID;
                this.router.navigate(['/1']);
                
              }
            },
            (err) => {
              console.log(err)  
            }
          );
        }
        else{
          this.data.student = this.studentResult;
          this.router.navigate(['/2']);
        }
      },
      (err) => {
        console.log(err)  
      }
    );
  }

}
