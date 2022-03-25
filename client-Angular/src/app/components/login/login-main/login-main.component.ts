import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  state:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //Selecting a new user or registered user
  onclick(num:number){
    if(num == 1){
      this.state = 1;
    }
    if(num == 2){
      this.state = 2;
    }
  }

}
