const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    added_date: {
        type: String,
        default: Date.now()
    }
})

module.exports = new mongoose.model('person', PersonSchema)