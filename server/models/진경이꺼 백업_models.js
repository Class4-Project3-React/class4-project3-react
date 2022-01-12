const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
// 로그인/회원가입을 위한 모듈
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
require("express");

//  로그인, 회원가입

// Home Page
modelExports.homePage = async (req, res, next) => {

    const [row] = await con.execute("SELECT * FROM `users` WHERE `id`=?", [req.session.userID]);

    if (row.length !== 1) { // [row]라고 입력했기에 1인지 아닌지를 체크하는 듯 하다.
        return res.redirect('/logout');
    }

    res.render('home', {
        user: row[0]
    });
}

// Register Page
modelExports.registerPage = (req, res, next) => {
    res.render("register");
};

// User Registration
modelExports.register = async (req, res, next) => {
    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('register', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await con.execute(
            "SELECT * FROM `users` WHERE `email`=?",
            [body._email]
        );

        if (row.length >= 1) {
            return res.render('register', {
                error: 'This email already in use.'
            });
        }

        const hashPass = await bcrypt.hash(body._password, 12);

        const [rows] = await con.execute(
            "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
            [body._name, body._email, hashPass]
        );

        if (rows.affectedRows !== 1) {
            return res.render('register', {
                error: 'Your registration has failed.'
            });
        }
        
        res.render("register", { msg: 'You have successfully registered.' }, () => {
            req.session.destroy((err) => {
                next(err);
            });
            res.redirect('/login');
        });

    } catch (e) {
        next(e);
    }
};

// Login Page
modelExports.loginPage = (req, res, next) => {
    res.render("login");
};

// Login User
modelExports.login = async (req, res, next) => {

    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('login', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await con.execute('SELECT * FROM `users` WHERE `email`=?', [body._email]);

        if (row.length != 1) {
            return res.render('login', {
                error: 'Invalid email address.'
            });
        }

        const checkPass = await bcrypt.compare(body._password, row[0].password);

        if (checkPass === true) {
            req.session.userID = row[0].id;
            return res.redirect('/');
        }

        res.render('login', {
            error: 'Invalid Password.'
        });


    }
    catch (e) {
        next(e);
    }

}




