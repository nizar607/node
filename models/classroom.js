const mongoose = require('mongoose');
const ClassroomSchema = new mongoose.Schema({
  class: String,
  capacity: Number,
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
