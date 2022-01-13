// const models = require("../models/models.js")
const models = require("../models/models");

// Todo
exports.getTodo_Controllers = (req ,res) => {
    models.getTodo().then((result) => {
        console.log("결과값은?: ", result);
        console.log("타입은?: ", typeof(result));
        res.send(result);
    });
};

exports.postTodo_Controllers = (req, res) => {

    exports.title = req.body.title;
    exports.contents = req.body.contents;

    models.postTodo().then((result) => {
        res.send(result);
    });
};

exports.deleteTodo_Controllers = (req, res) => {
    exports.title = req.params.title;

    models.deleteTodo().then((result) => {
        res.send(result);
    });
};

// Profile
exports.getProfile_Controllers = (req, res) => {
    models.getProfile().then( (result) => {
        console.log("Profile : ", result);
        console.log("Type : ", typeof(result));
        res.send(result);
    });
};

exports.putProfile_Controllers = (req, res) => {

    exports.name = req.body.name;
    exports.profile = req.body.profile;
    exports.favorite = req.body.favorite;

    models.putProfile().then( (result) => {
        console.log("Profile put : ", result);
        console.log("Profile put type: ", typeof(result));
        res.send(result);
    });
};