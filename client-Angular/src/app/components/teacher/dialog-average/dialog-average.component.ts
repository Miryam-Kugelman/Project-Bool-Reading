import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  level: number;
}

@Component({
  selector: 'app-dialog-average',
  templateUrl: './dialog-average.component.html',
  styleUrls: ['./dialog-average.component.scss']
})
export class DialogAverageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAverageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
