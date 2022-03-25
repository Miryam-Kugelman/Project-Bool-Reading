import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exist-id',
  templateUrl: './dialog-exist-id.component.html',
  styleUrls: ['./dialog-exist-id.component.scss']
})
export class DialogExistIDComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogExistIDComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
