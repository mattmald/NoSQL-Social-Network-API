const connection = require('../config/connection');
const { Thought, Users } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await Users.deleteMany({});
    await Thought.deleteMany({});

    const users = [{
        username: "matt",
        email: "fakemail@gmail.com"
    },
    {
        username: "djTutor",
        email: "tutor@gmail.com"
    }]

    const thoughts = [{
        thoughtText: "hello",
        username: "rick",
        reaction: [{
            reactionBody: "nice!!",
            username: "matt"
        }]
    }]


    await Users.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users, thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})
