const { Users, Thoughts } = require('../models');

const usersController = {

    getAllUsers(req, res) {
        Users.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
};

module.exports = usersController