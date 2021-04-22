import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private quizService: QuizService,private router: Router) { }
  bestScore
  ngOnInit(): void {
    this.bestScore = localStorage.getItem('score');    
  }

  startGame() {
    this.router.navigate(['/quiz']);
  }
}
