import { Component, OnInit } from '@angular/core';
import { WordView } from 'src/app/class/classViews';
import { AllServiceService } from 'src/app/services/all/all-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-learn-one',
  templateUrl: './learn-one.component.html',
  styleUrls: ['./learn-one.component.scss']
})
export class LearnOneComponent implements OnInit {

  level: number = 1;
  min = 1;
  max = 25;
  id = this.data.student.StudentId;
  words : WordView[] =[];
  randomWord!: string;
  num = 1;

  constructor(private data: DataServiceService, private all: AllServiceService, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.num = 1;
    this.studentService.getWords(this.level).subscribe(
      (words) => {
        this.words = words;
        this.randomWord = this.studentService.getRandomWord(words, this.min, this.max) || '';
      },
      (err) => {
        console.log(err);
        return(err)
      }
    );
  }

  //Router of learn two
  nextLevel(){
    this.studentService.routerLearnTwo();
  }
  //Router of learn one
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
    this.randomWord = this.studentService.getRandomWord(this.words, this.min, this.max) || '';
    this.studentService.listen(this.randomWord);
    this.num++;
  }

}
