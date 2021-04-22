import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'quiz', component: QuizScreenComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    QuizScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
