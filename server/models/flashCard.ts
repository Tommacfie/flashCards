import mongoose from './index';
const { Schema, model } = mongoose;

export const flashCardSchema = new Schema({
  title: String,
  question: String,
  answer: String,
});

const Mood = model('flashCard', flashCardSchema);

export default Mood;
