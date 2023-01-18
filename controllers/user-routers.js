const { Thought, Users } = require('../models');
const User = require('../models/user');

module.exports = {
    //get all users
    getUsers(req, res) {
        Users.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //gets single user
    getSingleUser(req, res) {
        Users.findOne({ _id: req.params.userId })
            .select('__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No course with that ID' })
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },
    //creates a users
    createUser(req, res) {
        Users.create(req.body)
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })
    },
    //updates a user
    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((course) =>
                !course
                    ? res.status(404).json({ message: 'No Users with this id!' })
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },
    //deletes a user
    deleteUser(req, res) {
        Users.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No User found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // /api/users/:userId/friends/:friendId
    addFriend(req, res) {
        Users.findOneAndUpdat(
            { _id: req.params.userId },
            { $addToSet: { friend: params.friendid } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No User found with that ID :(' })
                    : res.json(student)
            )
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friend: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No student found with that ID :(' })
                    : res.json(student)
            )
            .catch((err) => res.status(500).json(err));
    },
};