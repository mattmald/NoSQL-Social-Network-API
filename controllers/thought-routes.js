const { Thought, Users } = require('../models');

module.exports = { 
    getThought(req,res) {
        Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('__v')
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thought with that Id'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //need to update Thought and push with 

}