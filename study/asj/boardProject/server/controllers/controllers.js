const models = require("../models/models");

// Board List
exports.board_List_Controllers = (req, res) => {
    models.board.board_List_Models().then((result) => {
        res.send(result);
    });
};

// Board Detail
exports.board_Detail_Controllers = (req, res) => {

    exports.id = req.body.id;

    models.board.board_Detail_Models().then((result) => {
        res.send(result);
    });
};

// Board Insert
exports.board_Insert_Controllers = (req, res) => {

    exports.name = req.body.name;
    exports.title = req.body.title;
    exports.content = req.body.content;
    exports.image = req.file.filename;;

    models.board.board_Insert_Models().then((result) => {
        res.send(result);
    });
};