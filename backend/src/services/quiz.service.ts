const axios = require('axios');
import * as dotenv from 'dotenv';
import { MovieService } from './movie.service';
import { PersonService } from './person.service';
import * as fs from 'fs'

dotenv.config();
const url = process.env.URLIMG
const movieService = new MovieService();
const personService = new PersonService();

export class QuizService{

createQuestion = async () =>{
  try {
    const movie = await movieService.getRandomMovie()
    const actingMovie = await this.chooseActing(movie.id)
    const question = {
        movie_id: movie.id,
        movie_titel: movie.original_title,
        poster_path: movie.poster_path != null ? url +  movie.poster_path : null,
        acting_id: actingMovie.actor.id,
        acting_name: actingMovie.actor.name,
        acting_profile_path: actingMovie.actor.profile_path != null ? url + actingMovie.actor.profile_path :null,
        response: actingMovie.response
    }
    return question
  } catch (error) {
    console.log(error)
  }
}

chooseActing = async (id) =>{
  const actor = await movieService.getRandomActingMovie(id)
  if(movieService.between(1,1000) % 2 && actor != null){ // impair
    return {
      actor: actor,
      response: true
    }
  }
  const person =  await personService.getRandomPerson()
 
  return {
      actor: person,
      response: false
    }
  }

  saveHighscore(score){
    let file = __dirname + "/../data/highscore.json"
    fs.writeFile(file, JSON.stringify(score), 'utf8', function (err) {
          if (err) {
              return err;
          }
      });
    return score
  }

  getHighscore(){
    let file = __dirname + "/../data/highscore.json"
    try {
      let rawdata = fs.readFileSync(file,'utf8');
      return JSON.parse(rawdata);
    } catch (err) {
      let data ={
        highscore: 0
      }
      fs.writeFile(file, JSON.stringify(data), 'utf8', function (err) {
            if (err) {
                return (err);
            }
        });
      return data
    }
  }
}