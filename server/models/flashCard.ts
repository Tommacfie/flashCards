import mongoose from './index';
const { Schema, model } = mongoose;

const flashCardSchema = new Schema({
  title: String,
  question: String,
  answer: String,
});

const FlashCard = model('flashCard', flashCardSchema);

export default FlashCard;
