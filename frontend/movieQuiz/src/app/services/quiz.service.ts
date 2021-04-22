import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Question } from '../models/quiz.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {
  }

  // generaet random Question
  getQuestion(): Observable<Question>{
      const url = `${environment.urlApi}/quiz/question`;
      return this.http.get<Question>(url)
  }

  // save highScore in api
  saveHighscore(): Observable<any>{
    const url = `${environment.urlApi}/quiz/score`;
    let saveScore = {
      highscore : Number(localStorage.getItem("score"))
    }
    return this.http.post<any>(url, saveScore)
  }

  // get highScore from api
  getHighscore(): Observable<any>{
    const url = `${environment.urlApi}/quiz/score`;
    return this.http.get<any>(url)
  }
}
