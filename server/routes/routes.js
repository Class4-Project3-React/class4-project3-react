const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const util = require("util")
const con = require("../utils/db");

router.get('/', controllers.TestControllers); // 권원현 server 및 db 테스트용 router ('/' url 필요하신 분은 삭제하고 쓰셔도 됨)

// 로그인 라우터
router.get('/login', (req, res) => {
	// 임시로 값을 넣어 주었다.
    res.send({data: 'data'})
});

router.post('/onLogin', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
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


module.exports = router;