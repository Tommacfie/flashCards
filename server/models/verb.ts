import mongoose from './index';
const { Schema, model } = mongoose;

const verbSchema = new Schema({
  name: { polish: String!, english: String! },
  description: String!,
  action: String!,
  conjugations: {
    past: { type: Schema.Types.ObjectId, ref: 'conjugations' },
    present: { type: Schema.Types.ObjectId, ref: 'conjugations' },
    future: { type: Schema.Types.ObjectId, ref: 'conjugations' },
  },
  examples: [{ type: Schema.Types.ObjectId, ref: 'phrase' }],
});

const Verb = model('verb', verbSchema);

export default Verb;
