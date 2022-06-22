import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema({
  registerationNumber: Number,
  name: String,
  date: { type: Date, default: Date.now },
  description: String,
  exersise: [{ name: String, reps: Number }],
  bodyParts: 'string',
});

const workout = mongoose.model('workout', workoutSchema);

export default workout;
