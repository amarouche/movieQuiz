import { MovieService } from '../services/movie.service';

const movieService = new MovieService();

export const  getMovie = async (req, res) => {
  try {
    const id  = req.params.id;
    const response = await movieService.getMovie(id);
    return res.status(200).json(response);
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

export const getCreditsBYMovie = async  (req, res) => {
  try {
    const response = await movieService.getCreditsBYMovie(Number(req.params.id));
    return res.status(200).json(response);
  } catch (e) {
    return e;
  }
};

export const getRandomMovie = async (req, res) =>{
  try {
    const response = await  movieService.getRandomMovie();
    return res.status(200).json(response);
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}



