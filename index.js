import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import workoutRoutes from './routes/workout.js';

const app = express();

app.use('/workouts', workoutRoutes);

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use(cors());

const CONNECTION_URL ='mongodb+srv://lss555:%40Shredmtns7@cluster0.otizj.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () =>
  console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));
