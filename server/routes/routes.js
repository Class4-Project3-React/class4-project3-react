const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

const {
    homePage,
    register,
    registerPage,
    login,
    loginPage,
} = models

router.post('/contents', (req, res) => {
    console.log(req.body);
});
router.get('/contents', controllers.TestControllers);

//  로그인
router.get('/', controllers.ifNotLoggedin, homePage);

router.get("/login", controllers.ifLoggedin, loginPage);
router.post("/login",
ifLoggedin,
    [
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    login
);

// 회원가입
router.get("/register", controllers.ifLoggedin, registerPage);
router.post(
    "/register",
    controllers.ifLoggedin,
    [
        body("_name", "The name must be of minimum 3 characters length")
            .notEmpty()
            .escape()
            .trim()
            .isLength({ min: 3 }),
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    register
);

router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        next(err);
    });
    res.redirect('/login');
});


module.exports = router;