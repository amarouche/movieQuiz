import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'movieQuiz';
  high = null
  constructor(private quizService: QuizService){
    this.quizService.getHighscore().subscribe((data) => {
      this.high = data.highscore
      localStorage.setItem('score', this.high); 
      return data
    });
  }
}
