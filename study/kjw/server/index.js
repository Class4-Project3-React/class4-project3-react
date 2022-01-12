const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "thdrn48",
    database: "crud_test",
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//========

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO crud (name, profile, favorite) VALUES ('jaewon', 'test', 'test2');"
    db.query( (err, result) => {
        res.send('hello world 제발 서버ㅠ');
    })
});
// '/'일때 일단 그냥 찍어내는걸 한거지

// mypage_todo

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM mypage_todo;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    
    const title = req.body.title;
    const contents = req.body.contents;
    // const favorite = req.body.favorite;
    
    const sqlInsert = "INSERT INTO mypage_todo (title, contents) VALUES (?, ?);"
    db.query(sqlInsert, [title, contents], (err, result) => {
        console.log(err);
    });
});

app.delete("/api/delete/:title", (req,res) => {
    const title = req.params.title;

    const sqlDelete = "DELETE FROM mypage_todo WHERE title = ?;"
    db.query(sqlDelete, title , (err, result) => {
        if(err) console.log(err);
    });
})

// mypage_profile

app.get("/api/test/get", (req, res) => {
    const sqlSelect = "SELECT * FROM mypage_profile;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.put("/api/test/update", (req,res) => {
    const name = req.body.name;
    const profile = req.body.profile;
    const favorite = req.body.favorite;

    const sqlUpdate = "UPDATE mypage_profile SET profile = ?, favorite = ? WHERE name = ?;"
    db.query(sqlUpdate, [profile, favorite ,name ] , (err, result) => {
        if(err) console.log(err);
    });
})

// =====
app.listen(3001, () => {
    console.log('running on port 3001!!');
});