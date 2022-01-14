const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const bodyParser = require('body-parser');

const mysql = require('mysql');

const multer = require('multer');
const { v4: uuid } = require('uuid'); // upload 파일명 고유 아이디. = 1
const mime = require('mime-types'); // upload 파일 타입 가져오기.  = 1

const path = require('path'); // 사용안할듯 최종확인 필요. = 0
const fs = require('fs'); // 사용안할듯 최종확인 필요. = 0

const db = mysql.createPool({ // 커넥트풀 밖으로 이동필요. = 0
    host: "localhost",
    user: "root",
    password: "root", // 비번 변경필요. = 0
    database: "project3_react",
    connectionLimit : 100,
    port: "3306"
});

const port = 3001; // 서버 포트 변경 금지. = 1

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/board/get", (req, res)=>{
    const sql = "SELECT * FROM board;";
    db.query(sql, (err, result)=>{
        if(err) {
            throw err
        } else {
            res.send(result);
            console.log('result = ' + result);
        }        
    })
})

app.get("/board/detail/:id", (req, res)=>{
  const id = req.body.id;
  // const id = req.params.id;

  const sql = `SELECT * FROM board where id = ${id}`;
  db.query( sql, (err, result, fields)=>{
    if(err) throw err;
     res.send(result)
     console.log(result);
  });
});


try {
    fs.readdirSync('public/upload');
} catch (error) {
    console.error('upload 폴더 생성.');
    fs.mkdirSync('public/upload');
}

// POST 사용할때 미들웨어 한방에 묶기.
// 기존사용법
// const storage = multer.diskStorage({})
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
// 파일 경로 public static. = 1
// 파일 경로 조장놈한테 말하기. = 1
// 파일 고유 아이디. = 1
// 파일 파입까지 이름지정. = 1
// 파일 용량제한. = 0
// 파일 이미지 이외 제한. = 0 


// 제출 버튼 사용하여 express 서버에 이미지 업로드
// 사용 안할듯 - 게시판 추가 버튼으로 같이 돌리기. = 1
app.post('/board/ImageUpload', upload.single('image'), (req, res) => {
    console.log(req.file.filename);
    res.send('ok');
});

// const upload = multer({storage: storage});
app.post("/board/Insert", upload.single('image'), (req, res) =>{
    // console.log(req.file.filename)
    const name = req.body.name; 
    const title = req.body.title; 
    const content = req.body.content; 
    const image = 'http://localhost:3000/upload/' + req.file.filename;

    const sql = "INSERT INTO board (name, title, content, image) VALUES (?,?,?,?)";
    db.query(sql, [name, title, content, image], (err, result) => {
        if (err){
            throw err;
        } else {
            res.send("ㅇㅇ");
        console.log(result);
        console.log("씨발놈아");
        }
    });
});

// -----------------------------------------------------------------------
// app.get("/getEmpList", (request, response) => {
  
//   connection.query("SELECT * FROM emp", (err,result) => {
//     response.json({data:result})
//   });
  
// })

// app.get("/getEmpInfo/:id", (request, response) => {
  
//   connection.query("SELECT * FROM emp where id = "+ request.params.id,  (err,result) => {
//     response.json({data:result})
//   });
  
// })

// app.get("/setEmpInfo/:id/:name", (request, response) => {
  
//   connection.query("UPDATE emp SET name = '"+request.params.name+"' WHERE id = "+request.params.id ,  (err,result) => {
//     response.json({data:result})
//   });
  
// })

// app.get("/delEmpInfo/:id", (request, response) => {
  
//   connection.query("DELETE FROM emp WHERE id = "+request.params.id ,  (err,result) => {
//     response.json({data:result})
//   });
  
// })

// app.get("/insEmpInfo/:name", (request, response) => {

//   connection.query("INSERT INTO emp (name) VALUES ('"+request.params.name+"')" ,  (err,result) => {
//     response.json({data:result})
//   });
  
// })

app.listen(port, ()=>{
    console.log(`드가자 ${port}`);
});