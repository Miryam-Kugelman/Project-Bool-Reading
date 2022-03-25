import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  constructor(private all: AllServiceService ,private data: DataServiceService) { }

  id = this.data.student.StudentId;

  ngOnInit(): void {
  }

  exit(){
    this.all.exit;
  }

}
