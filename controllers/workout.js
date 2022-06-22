export const getWorkouts = async (req, res)=> {
  try {
    const allWorkouts = await workout.find();
    
    res.status(200).json(allWorkouts);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createWorkout = async (req, res)=> {
  const workout = req.body;

  const newWorkout = new workout(workout);
  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}
