const mongoose = require('mongoose');

module.exports = async function() {
  if (process.env.NODE_TEST_ENV === 'integration') {
    await mongoose.connect('mongodb://localhost:27017/vospay-test');
    await mongoose.connection.db.dropDatabase();
  }
};
