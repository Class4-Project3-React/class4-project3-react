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

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO crud (name, profile, favorite) VALUES ('jaewon', 'test', 'test2');"
    db.query( (err, result) => {
        res.send('hello world 제발 서버ㅠ');
    })
});
// '/'일때 일단 그냥 찍어내는걸 한거지

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM crud;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/test/get", (req, res) => {
    const sqlSelect = "SELECT * FROM test;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const name = req.body.name;
    const profile = req.body.profile;
    const favorite = req.body.favorite;

    const sqlInsert = "INSERT INTO crud (name, profile, favorite) VALUES (?, ?, ?);"
    db.query(sqlInsert, [name, profile, favorite], (err, result) => {
        console.log(err);
    });
});

app.delete("/api/delete/:name", (req,res) => {
    const name = req.params.name;

    const sqlDelete = "DELETE FROM crud WHERE name = ?;"
    db.query(sqlDelete, name , (err, result) => {
        if(err) console.log(err);
    });
})

app.put("/api/update", (req,res) => {
    const name = req.body.name;
    const profile = req.body.profile;

    const sqlUpdate = "UPDATE crud SET profile = ? WHERE name = ?;"
    db.query(sqlUpdate, [profile, name] , (err, result) => {
        if(err) console.log(err);
    });
})

app.listen(3001, () => {
    console.log('running on port 3001!!');
});