
import { QuizService } from '../services/quiz.service';
const gameService = new QuizService();


export const createQuestion = async(req, res) =>{
  try {
    const response = await gameService.createQuestion();
    return res.status(200).json(response);
  } catch (error) {
    return error
  }
}

export const getHightScore =  (req, res) =>{
    try {
      const response = gameService.getHighscore();
      return res.status(200).json(response);
    } catch (error) {
      return error
    }
}

export const saveHightScore =  (req, res) =>{
  try {
    let score = req.body;
    const response = gameService.saveHighscore(score);
    return res.status(201).json(response);
  } catch (error) {
    return error
  }
}
