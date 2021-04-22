
const axios = require('axios');
import * as dotenv from 'dotenv';

dotenv.config();
const url = process.env.MOVIESDB

export class MovieService{

  // GET movie by id
  getMovie = async (id) =>{
    try {
      const res = await axios.get(url+'movie/'+id+'?api_key='+process.env.API_KEY+'&language=en-FR')
      if (res.status === 200) {
        return res.data;
      }
      return res.response.data
      } catch (error) {
      return error;
    }
  }

  // GET credits by movie id
  getCreditsBYMovie = async (id) =>{
    try {
      const res = await axios.get(url+'movie/'+id+'/credits?api_key='+process.env.API_KEY+'&language=en-FR')
      if (res.status === 200) {
        return res.data;
      }
      return res.response.data;
    } catch (err) {
      return err;
    }
  }

  // GET random movie
  getRandomMovie = async () =>{
    const id  = this.between(1,1000)
    try {
      let data = await this.getMovie(id)
      if(data?.response?.status && data.response.status === 404){
        data = await this.getRandomMovie()
      }

      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  // GET random acting of movie
  getRandomActingMovie = async (id) => {
    const data = await this.getCreditsBYMovie(id)
    if(data.cast.length == 0){
      return null
    }
    return this.randomProperty(data.cast)
  }

  between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  
  randomProperty =  (obj) => {
    return obj[Math.floor(Math.random() * obj.length)]
  };
}