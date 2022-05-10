const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Connection = new Schema({
    patient: {}
},{
    /*connection: 'connection'*/
    collection: 'collection'
});

module.exports = mongoose.model('Connection', Connection);