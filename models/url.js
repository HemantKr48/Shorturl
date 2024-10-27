const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitedHistory: [{ timeStamp: { type: Number } }]
}, {
    timestamps: true
});

module.exports = mongoose.model('url', urlSchema);