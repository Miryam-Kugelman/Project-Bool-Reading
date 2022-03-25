import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  score: number;
  level: number;
} 

@Component({
  selector: 'app-dialog-add-score',
  templateUrl: './dialog-add-score.component.html',
  styleUrls: ['./dialog-add-score.component.scss']
})
export class DialogAddScoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAddScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
