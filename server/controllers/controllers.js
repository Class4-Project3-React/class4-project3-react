const models = require("../models/models");

// Contents_Article List
exports.contents_Article_List = (req, res) => {
    models.contents.contents_Article_List_DB().then((result) => {
        res.send({
            result: result
        });
    });
};

// Contents_Article Card 내용
exports.contents_Article_Detail = (req, res) => {
    exports.detailNum = req.body.no;
    models.contents.contents_Article_Detail_DB().then((result) => {
        res.send({
            result: result[0]
        });
    });
};

// Contents_Article 댓글 INSERT
exports.contents_Article_AddComment = (req, res) => {
    exports.comment = req.body.text;
    exports.page_no = req.body.no;
    models.contents.contents_Article_AddCommentt().then(result => {
        console.log("Comment Insert Success", result, "타입은?", typeof(result));
    });
};

//=========================================

// Todo
exports.getTodo_Controllers = (req ,res) => {
    models.mypage.getTodo().then((result) => {
        console.log("결과값은?: ", result);
        console.log("타입은?: ", typeof(result));
        res.send(result);
    });
};

exports.postTodo_Controllers = (req, res) => {

    exports.title = req.body.title;
    exports.contents = req.body.contents;

    models.mypage.postTodo().then((result) => {
        res.send(result);
    });
};

exports.deleteTodo_Controllers = (req, res) => {
    exports.title = req.params.title;

    models.mypage.deleteTodo().then((result) => {
        res.send(result);
    });
};

// Profile
exports.getProfile_Controllers = (req, res) => {
    models.mypage.getProfile().then( (result) => {
        console.log("Profile : ", result);
        console.log("Type : ", typeof(result));
        res.send(result);
    });
};

exports.putProfile_Controllers = (req, res) => {

    exports.name = req.body.name;
    exports.profile = req.body.profile;
    exports.favorite = req.body.favorite;

    models.mypage.putProfile().then( (result) => {
        console.log("Profile put : ", result);
        console.log("Profile put type: ", typeof(result));
        res.send(result);
    });
};
