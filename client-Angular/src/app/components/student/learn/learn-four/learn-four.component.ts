import { Component, OnInit } from '@angular/core';
import { WordView } from 'src/app/class/classViews';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-learn-four',
  templateUrl: './learn-four.component.html',
  styleUrls: ['./learn-four.component.scss']
})
export class LearnFourComponent implements OnInit {

  level: number = 4;
  min = 56;
  max = 61;
  num = 0;
  words : WordView[] =[];
  randomWord = '';
  id = this.data.student.StudentId;
  text !: string[];
  numText = 0;
  i = 0;

  constructor(private data: DataServiceService, private studentService: StudentServiceService, private all: AllServiceService) { }

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


  //Router of learn five
  nextLevel(){
    this.studentService.routerLearnFive();
  }
  //Router of learn four
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
