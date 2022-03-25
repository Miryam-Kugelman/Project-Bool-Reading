import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogDataAdd {
  addId: string
}

@Component({
  selector: 'app-dialog-add-student',
  templateUrl: './dialog-add-student.component.html',
  styleUrls: ['./dialog-add-student.component.scss']
})
export class DialogAddStudentComponent implements OnInit {

  constructor(public dialogRefAdd: MatDialogRef<DialogAddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public dataAdd: DialogDataAdd,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRefAdd.close();
  }
  
}
