import { Component, OnInit } from '@angular/core';
import { WordView } from 'src/app/class/classViews';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-learn-three',
  templateUrl: './learn-three.component.html',
  styleUrls: ['./learn-three.component.scss']
})
export class LearnThreeComponent implements OnInit {

  level: number = 3;
  min = 50;
  max = 55;
  num = 0;
  words : WordView[] =[];
  randomWord = ''; 
  id = this.data.student.StudentId;
  text !: string[];
  numText = 0;
  i = 0;

  constructor(private data: DataServiceService, private all: AllServiceService, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.num = 0;
    this.numText = 0;
    this.i = 0;
    this.studentService.getWords(this.level).subscribe(
      (words) => {
        this.words = words;
        this.randomWord = this.studentService.getRandomWord(this.words, this.min, this.max) || '';
        this.text = this.studentService.lineBreaks(this.randomWord);
        this.numText = this.text.length;
        this.randomWord = this.text[this.i];
        this.i++;
        this.numText--;
        this.num++;
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );
  }
 

  //Router of learn four
  nextLevel(){
    this.studentService.routerLearnFour();
  }
  //Router of learn three
  learnLevel(){
    this.ngOnInit();
  }
  //Routing to the home screen
  exit(){
    this.all.exit();
  }
  //Send to a function that reads the word
  listen(){
    this.studentService.listen(this.randomWord);
  }

  nextWord(){ 
    if(this.num < 2 && this.numText == 0){
      this.i = 0;
      this.randomWord = this.studentService.getRandomWord(this.words, this.min, this.max) || '';
      this.text = this.studentService.lineBreaks(this.randomWord);
      this.numText = this.text.length;
      this.randomWord = this.text[this.i];
      this.i++;
      this.numText--;
      this.num++;
    }
    else{ 
      this.randomWord = this.text[this.i];
      this.i++;
      this.numText--;  
    }
    this.studentService.listen(this.randomWord);
  }

}
