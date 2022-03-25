import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exist-teacher',
  templateUrl: './dialog-exist-teacher.component.html',
  styleUrls: ['./dialog-exist-teacher.component.scss']
})
export class DialogExistTeacherComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogExistTeacherComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
