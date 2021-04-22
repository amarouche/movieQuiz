import express from 'express'
import cors from 'cors'

const movieRoutes = require('./routes/movie.route');
const personRoutes = require('./routes/person.route');
const quizRoutes = require('./routes/quiz.route');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/api/movies',movieRoutes);
app.use('/api/person',personRoutes);
app.use('/api/quiz',quizRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
});

export {app};