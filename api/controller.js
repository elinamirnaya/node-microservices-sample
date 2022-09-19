const furniture = require('../databases/furniture.json');

var controller = {
    getFurniture: function(_req, res) {
        res.status(200).json(furniture);
    },
};

module.exports = controller;