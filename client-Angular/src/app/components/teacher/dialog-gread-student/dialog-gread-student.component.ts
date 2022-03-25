import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: string;
} 

@Component({
  selector: 'app-dialog-gread-student',
  templateUrl: './dialog-gread-student.component.html',
  styleUrls: ['./dialog-gread-student.component.scss']
})
export class DialogGreadStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogGreadStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
