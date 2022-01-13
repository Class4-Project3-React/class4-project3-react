const models = require("../models/models.js")

// 권원현 예제용
exports.getTodo_Controllers = (req ,res) => {
    models.getTodo().then((result) => {
        console.log("결과값은?: ", result);
        console.log("타입은?: ", typeof(result));
        res.send(result);
    });
};

exports.getProfile_Controllers = (req, res) => {
    models.getProfile().then( (result) => {
        console.log("Profile : ", result);
        console.log("Type : ", typeof(result));
        res.send(result);
    });
};

exports.putProfile_Controllers = (req, res) => {
    models.putProfile().then( (result) => {
        console.log("Profile put : ", result);
        console.log("Profile put type: ", typeof(result));
        res.send(result);
    });
};