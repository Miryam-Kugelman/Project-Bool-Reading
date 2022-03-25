import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-student-not-exist',
  templateUrl: './dialog-student-not-exist.component.html',
  styleUrls: ['./dialog-student-not-exist.component.scss']
})
export class DialogStudentNotExistComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogStudentNotExistComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
