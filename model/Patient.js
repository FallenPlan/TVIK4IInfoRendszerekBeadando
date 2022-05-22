const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let Patient = new Schema({
    _id: {
        type: Number
      },
    pname: {
        type: String
    },
    date_of_birth: {
        type: Date
    },
    taj_number: {
        type: Number
    },
    medical_history: {
        type: String
    },
    gender: {
        type: String
    }
});

Patient.plugin(autoIncrement.plugin, {
    model: 'Patient',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Patient', Patient);