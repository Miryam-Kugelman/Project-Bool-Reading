import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  level: number;
} 
 
@Component({
  selector: 'app-dialog-level-student',
  templateUrl: './dialog-level-student.component.html',
  styleUrls: ['./dialog-level-student.component.scss']
})
export class DialogLevelStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLevelStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
