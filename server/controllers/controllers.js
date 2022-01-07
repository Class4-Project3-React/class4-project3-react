// 나중에 코드가 얼마나 길어지고 또 유지보수 측면에서 어떻게 될 진 모르겠음 => 논의해봐야 함

const express = require("express");
const app = express();
const models = require("../models/models")

exports.TestControllers = (req, res) => {
    models.ReactTest().then((result) => {
        res.send(result[0].id);
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
