const furniture = require('../databases/furniture.json');
const distance = require('../services/distance');

var controller = {
    getFurniture: function(_req, res) {
        res.status(200).json(furniture);
    },
    getDistance: function(req, res) {   
        distance.find(req, res, function(err, dist) {
            if (err) {
                res.send(err);
            } else {
                res.json(dist);
            }
        });
    },
};

module.exports = controller;