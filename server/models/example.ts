import mongoose from './index';
const { Schema, model } = mongoose;

const phraseSchema = new Schema({
  polish: String!,
  english: String!,
});

const Phrase = model('phrase', phraseSchema);

export default Phrase;
