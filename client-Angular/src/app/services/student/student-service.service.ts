import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentView, WordView } from 'src/app/class/classViews';
import { HttpServiceService } from '../http/http-service.service';
import { TextToSpeechService } from '../text-to-speech/text-to-speech.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  randomNum = 0;
  randomPreviousNumber = 100;
  word = "";
  
  constructor(private router: Router, private service: HttpServiceService, private TextToSpeech: TextToSpeechService) { }

  //Routing to page
  onclick(st: number){
    if(st == 11){
      this.routerLearnOne();
    }
    if(st == 12){
      this.routerLearnTwo();
    }
    if(st == 13){
      this.routerLearnThree();
    }
    if(st == 14){
      this.routerLearnFour();
    }
    if(st == 15){
      this.routerLearnFive();
    }
    if(st == 16){
      this.routerLearnSix();
    }
    
    
  }

  //Routing of learn one
  routerLearnOne(){
    this.router.navigate(['/learn-level-one']);
  }
  //Routing of learn two
  routerLearnTwo(){
    this.router.navigate(['/learn-level-two']);
  }
  //Routing of learn three
  routerLearnThree(){
    this.router.navigate(['/learn-level-three']);
  }
  //Routing of learn four
  routerLearnFour(){
    this.router.navigate(['/learn-level-four']);
  }
  //Routing of learn five
  routerLearnFive(){
    this.router.navigate(['/learn-level-five']);
  }
  //Routing of learn six
  routerLearnSix(){
    this.router.navigate(['/learn-level-six']);
  }
  
  

  //Divide the section by line breaks
  lineBreaks(randomText:string){
    return (randomText.split("\n")).slice(0,5);
  }
  //Returning the word
  getWords(level: number){
    return  this.service.ArrWords(level)
  }
  
  //Random tax lottery
  getRandomWord(words: WordView[], min: number, max: number){
    console.log("vfvf",words)
    this.randomNum = Math.ceil((Math.random()*(max-min)+min));
    //Another lottery if the tax is also drawn once more so that the word does not come back twice in a row
    while(this.randomNum == this.randomPreviousNumber){
      this.randomNum = Math.ceil((Math.random()*(max-min)+min));  
    }
    this.randomPreviousNumber = this.randomNum;
    const word = words.find( x => x?.WordId == this.randomPreviousNumber)?.WordName;
    return word;
  }
     
  //Send to a function that reads the word
  listen(randomWord: string){
    this.TextToSpeech.synthesizeSpeech(randomWord);
  }
}
