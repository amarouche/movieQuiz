import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-quize-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.scss']
})
export class QuizScreenComponent implements OnInit {
  timeLeft: number = 60;
  interval;
  bestScore = localStorage.getItem('score');
  question: Question = null
  currentScore = 0;

  gameOverScreen = false
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('score'))
    this.quizService.getQuestion().subscribe((data) => {
      this.question = data
      if(this.question.acting_profile_path ===  null){
        this.question.acting_profile_path =environment.unknown
      }
    })
    console.log(this.question);
    this.startTimer()
  }
  
  // call new question
  nextQuistion(oldResponse: boolean, trueResponse:boolean){
    console.log(oldResponse, trueResponse);
    if(oldResponse === trueResponse) {
      this.currentScore+= 10
    }
    if(this.currentScore > Number(this.bestScore)){
      localStorage.setItem('score',String(this.currentScore))
      this.quizService.saveHighscore().subscribe((data) => {
        return data
      });
      this.bestScore =localStorage.getItem('score')
    }
    this.quizService.getQuestion().subscribe((data) => {
      this.question = data
      if(this.question.acting_profile_path ===  null){
        this.question.acting_profile_path =environment.unknown
      }
    })
  }
  // timer 
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
        this.gameOverScreen = true
      }
    },1000)
  }
  // replay 
  replay(){
    this.gameOverScreen = false
    this.currentScore = 0;
    this.timeLeft = 60
  }
}
