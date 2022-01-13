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
