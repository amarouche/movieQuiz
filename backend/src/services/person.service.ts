const axios = require('axios');
import * as dotenv from 'dotenv';
import { MovieService } from './movie.service';

dotenv.config();
const url = process.env.MOVIESDB
const movieService = new MovieService();

export class PersonService {

  // GET person by id
  getPersonbyId = async (id) =>{
    try {
      const res = await axios.get(url+'person/'+id+'?api_key='+process.env.API_KEY+'&language=en-FR')
          .then((resp) =>  {
            return resp
          })
          .catch( (error) => {
            return error
          })
      if (res.status === 200) {
        return res.data;
      }
      return res.response.data
      } catch (error) {
      return error;
    }
  }

  // GET random person by id
  
  getRandomPerson = async() => {
    const id  = movieService.between(1,1000)
    try {
      let data = await this.getPersonbyId(id)
      if(!data.success && data.status_code === 34){
        data = await this.getRandomPerson()
      }
      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }
}