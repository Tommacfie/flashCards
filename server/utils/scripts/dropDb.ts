import Mongoose from '../../models/index';

(async () => {
  try {
    await Mongoose.connection.dropDatabase();
    console.log(
      `\n${new Date().toLocaleString()}:\n=> MongoDb Database dropped\n`
    );
    await Mongoose.connection.close();
  } catch (error) {
    return error;
  }
})();
