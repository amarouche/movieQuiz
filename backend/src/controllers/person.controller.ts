import { PersonService } from '../services/person.service';

const personService = new PersonService();

// GET person by id
export const  getPersonById = async (req, res) => {
  try {
    const id  = req.params.id;
    const response = await personService.getPersonbyId(id);
    return res.status(200).json(response);
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

// GET random person
export const getRandomPerson = async (req, res) =>{
  try {
    const response = await  personService.getRandomPerson();
    return res.status(200).json(response);
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}