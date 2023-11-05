import { Schema, model } from 'mongoose';

const conjugationsSchema = new Schema({
  tense: { type: String, enum: ['PAST, PRESENT, FUTURE'], required: true },
  firstPerson: String!,
  secondPerson: String!,
  thirdPersonMasculine: String!,
  thirdPersonFeminine: String!,
  thirdPersonNeutral: String!,
  firstPersonPlural: String!,
  secondPersonPlural: String!,
  thirdPersonPlural: String!,
});

const Conjugations = model('conjugations', conjugationsSchema);

export default Conjugations;
