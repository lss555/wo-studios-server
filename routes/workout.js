import express from 'express';
import { getWorkouts, createWorkout } from '../controllers/workout.js';
import workout from '../models/workout.js';
const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkout);

export default router;
