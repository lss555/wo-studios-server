import WorkoutData from '../models/workout.js';

export const getWorkouts = async (req, res)=> {
  try {
    const allWorkouts = await WorkoutData.find();

    res.status(200).json(allWorkouts);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createWorkout = async (req, res)=> {
  const workout = req.body;

  const newWorkout = new WorkoutData(workout);
  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}
