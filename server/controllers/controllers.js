// 나중에 코드가 얼마나 길어지고 또 유지보수 측면에서 어떻게 될 진 모르겠음 => 논의해봐야 함

const express = require("express");
const models = require("../models/models")

// 권원현 contents 테스트 용
exports.contents_Article_List = (req, res) => {
    models.contents_Article_List_DB().then((result) => {
        res.send({
            result: result
        });
    });
};

exports.contents_Article_Detail = (req, res) => {
    exports.detailNum = req.body.no;
    models.contents_Article_Detail_DB().then((result) => {
        // console.log(result[0].media);
        res.send({
            result: result[0]
        })
    })
}

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
