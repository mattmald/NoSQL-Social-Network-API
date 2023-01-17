const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const 

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        Type: String,
        required: true,
    },
    reactions: [ReactionSchema]
});