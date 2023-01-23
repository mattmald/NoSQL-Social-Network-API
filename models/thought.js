const { Schema, model, Types } = require('mongoose');
// const moment = require('moment');

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
        type: String,
        required: true,
    },
    reactions: [
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId()
            },
            reationBody: {
                type: String,
                required: true,
                max_length: 280,
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
            },
        },
    ],
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

ThoughtSchema.virtual('reationCount').get(function () {
    return this.reaction.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought; 