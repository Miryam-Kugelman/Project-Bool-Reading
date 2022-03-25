import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-data-error',
  templateUrl: './dialog-data-error.component.html',
  styleUrls: ['./dialog-data-error.component.scss']
})
export class DialogDataErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDataErrorComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
