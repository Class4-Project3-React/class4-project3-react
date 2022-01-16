const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const util = require("util")
const con = require("../utils/db");

// Use Board 미들웨어 구분 Start
const multer = require('multer');
const { v4: uuid } = require('uuid'); // upload 파일명 고유 아이디. = 1
const mime = require('mime-types'); // upload 파일 타입 가져오기.  = 1
const fs = require('fs');
// Use Board  미들웨어 구분 End

// Contents
router.get('/contents', controllers.contents_Article_List);
router.post('/contents/articles/comments', controllers.contents_Article_ReadComment);
router.post('/contents/articles/addcomments', controllers.contents_Article_AddComment);
router.delete('/contents/articles/comments/delete', controllers.contents_Article_DeleteComment);

// 로그인 라우터
router.get('/login', (req, res) => {
	// 임시로 값을 넣어 주었다.
    res.send({data: 'data'})
});

router.post('/onLogin', (req, res) => {
    // console.log(`= = = > req : ${util.inspect(req)}`)
    // user_id, user_pw 변수로 선언
    const user_id = req.query.user_id
    const user_pw = req.query.user_pw
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?'
    con.query(sql1, user_id, (err, data) => {
        if(!err) {
        	// 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userPw`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                con.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

// 회원가입 라우터
router.get('/register', (req, res) => {
	// 임시로 값을 넣어 주었다.
    res.send({data: 'data'})
});

router.post('/onRegister', (req, res) => {
    // 인풋에 입력받은 계정 데이터를 변수화.
    const user_id = req.query.user_id
    const user_name = req.query.user_name
    const user_email = req.query.user_email
    const user_pw = req.query.user_pw
    console.log('유저 아이디', user_id)
    console.log('유저 네임', user_name)
    console.log('유저 이메일', user_email)
    console.log('유저 비밀번호', user_pw)
    // 테이블에 데이터 삽입하는 로직
    // 데이터 삽입 sql문
    const registerSql = "INSERT INTO user_inform (user_id, user_name, user_email, user_pw) values(?, ?, ?, ?)"
    // 넣어야 할 데이터 묶음
    const dataParams = [user_id, user_name, user_email, user_pw]
    // 테이블에 삽입
    con.query(registerSql, dataParams,
        function (err, rows, fields) {
            if(err) {
                console.log("DB 저장 실패 : ", err)
            } else {
                console.log("DB 저장 성공")
            }
        }
    )
})

// 재원 mypage router
router.get("/api/get", controllers.getTodo_Controllers);
router.post("/api/insert", controllers.postTodo_Controllers);
router.delete("/api/delete/:title", controllers.deleteTodo_Controllers);

router.get("/api/login", controllers.getLogin_Controllers);
router.get("/api/test/get", controllers.getProfile_Controllers);
router.put("/api/test/update", controllers.putProfile_Controllers);


// Use Board 이미지 업로드용 폴더 체크 없으면 생성 Start
try {
    fs.readdirSync('public/upload');
} catch (error) {
    console.error('upload 폴더 생성.');
    fs.mkdirSync('public/upload');
}
// Use Board 이미지 업로드용 폴더 체크 없으면 생성 End

// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) Start
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
        done(null, 'public/upload');
        },
        filename(req, file, done) {
        done(null, `${uuid()}.${mime.extension(file.mimetype)}`);
        },
    })
});
// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) End

// Board
router.get('/board/get', controllers.board_List_Controllers);
router.get('/board/detail/:id', controllers.board_Detail_Controllers);
router.post('/board/Insert', upload.single('image'), controllers.board_Insert_Controllers);
router.post('/board/ImageUpload', upload.single('image'), controllers.board_Upload_Controllers);
router.delete('/board/delete/:id', controllers.board_Delete_Controllers);

module.exports = router;