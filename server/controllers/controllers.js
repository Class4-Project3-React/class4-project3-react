const models = require("../models/Contents_models");

// Contents_Article List
exports.contents_Article_List = (req, res) => {
    models.contents_Article_List_DB().then((result) => {
        res.send({
            result: result
        });
    });
};

// Contents_Article Card 내용
exports.contents_Article_Detail = (req, res) => {
    exports.detailNum = req.body.no;
    models.contents_Article_Detail_DB().then((result) => {
        res.send({
            result: result[0]
        });
    });
};

// Contents_Article 댓글 INSERT
exports.contents_Article_AddComment = (req, res) => {
    exports.comment = req.body.text;
    exports.page_no = req.body.no;
    models.contents_Article_AddCommentt().then(result => {
        console.log("Comment Insert Success", result);
    });
};

exports.ifNotLoggedin = (req, res, next) => {
    if(!req.session.userID){
        return res.redirect('/login');
    }
    next();
}

exports.ifLoggedin = (req,res,next) => {
    if(req.session.userID){
        return res.redirect('/');
    }
    next();
}
