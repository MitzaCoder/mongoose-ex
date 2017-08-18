const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-exercise');

const db = mongoose.connection;
const Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  const classSchema = Schema({
    name: String,
    difficulty: Number,
    teachers: [Schema.Types.ObjectId],
  });

  const teacherSchema = Schema({
    firstName: String,
    lastName: String,
    experience: Number,
  });

  const schoolSchema = Schema({
    name: String,
    address: String,
    teachers: [Schema.Types.ObjectId],
  });

  const studentSchema = Schema({
    firstName: String,
    lastName: String,
    schoolYear: Number,
    school: Schema.Types.ObjectId
  });


});