const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const util = require("util")
const con = require("../utils/db");

router.get('/contents', controllers.contents_Article_List);
router.post('/contents/articles', controllers.contents_Article_Detail);
router.post('/contents/articles/comments', controllers.contents_Article_AddComment);

// 로그인 라우터
router.get('/login', controllers.getLogin)
router.post('/onLogin', controllers.postLogin)

// 회원가입 라우터
router.get('/register', controllers.getRegister)
router.post('/onRegister', controllers.postRegister)

// 재원 mypage router
router.get("/api/get", controllers.getTodo_Controllers);
router.post("/api/insert", controllers.postTodo_Controllers);
router.delete("/api/delete/:title", controllers.deleteTodo_Controllers);

router.get("/api/test/get", controllers.getProfile_Controllers);
router.put("/api/test/update", controllers.putProfile_Controllers);

module.exports = router;