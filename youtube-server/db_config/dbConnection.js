const mongoose = require('mongoose');
const { dbConnectionUri } = require('../config');

const connectDB = async () => {
  try {
    await mongoose.connect(dbConnectionUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDb connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
