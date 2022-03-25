import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { HttpServiceService } from 'src/app/services/http/http-service.service';
import { TeacherServiceService } from 'src/app/services/teacher/teacher-service.service';
import { DialogAverageComponent } from '../dialog-average/dialog-average.component';

export interface DialogData {
  level: number;
}

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {

  num! : number;
  data! : DialogData;
  level! : number;
  id = this.d.teacher.TeacherId;

  constructor(public dialog: MatDialog, private service: HttpServiceService, private d: DataServiceService, private all: AllServiceService, private teacherService: TeacherServiceService) { }

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
  
  //Enter a level for dialogue to get an average
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAverageComponent, {
      width: '250px',
      data: {level: this.level},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      if(this.data.level < 7 && this.data.level > 0){
        this.insertLevel(this.data.level);
      }
      else{
        this.teacherService.dataError();
      }
    });
  }
  
  //Send the level to the server to get an average
  insertLevel(value: number)
  {
    this.service.Average(value,this.d.teacher.TeacherId).subscribe(
      (average) => {
        this.num = average;
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
