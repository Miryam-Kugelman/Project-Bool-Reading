import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private router: Router) { }

  //Routing to the home screen
  exit(){
    this.router.navigate(['']);
  }

}
