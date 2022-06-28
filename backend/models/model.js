const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    availableTimes: {
        type: [(String, String)],
        required: true
    }
});

const pageSchema = new Schema({
    code: {
        type: String,
        required: false,
        unique: true
    },
    meetupName: {
        type: String,
        required: false // true
    },
    meetupDescripton: {
        type: String,
        required: false
    },
    participants: {
        type: [personSchema],
        required: false
    },
    meetupDays: {
        type: [String],
        required: false // true
    },
    meetupTimeRange: {
        type: String,
        required: false // true
    }
});

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
