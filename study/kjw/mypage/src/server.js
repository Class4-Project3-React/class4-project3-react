// const express = require("express");
// const app = express();
// const router = require("./routes/routes");
// const cors = require("cors");

// app.use(cors());
// app.use("/", router);

// const port = 3001;

// app.listen(port, () => console.log(`Node js Server ruuning at http://54.180.117.235:${port}/`));


const express = require("express");
const app = express();
// const router = require("./routes/routes");
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "project3_react"
});

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    const sql = "SELECT * FROM project3_react;";
    // const sql = "INSERT INTO board (title, content) VALUES ('aaa','bbb')";
    db.query(sql, (err, result)=>{
        console.log(result);
        res.send(result);
    });
});

app.get('/board/alk;sdjf;alsdfjk', (req, res) => {     
    const sql = "SELECT * from board"; 
    db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
      console.log("이충현 개노잼")
      console.log(result);
    });
  });

app.post("/board/Insert", (req, res) =>{
    const title = req.body.title; 
    const content = req.body.content; 
    console.log("req = "+ req);

    const sqlInsert = "INSERT INTO board (title, content) VALUES (?,?)";
    db.query(sqlInsert, [title, content], (err, result) => {
        if (err){
            throw err;
        } else {
            res.send("Values Inserted");
        console.log(result);
        console.log("씨발놈아");
        }
    });
});

app.listen(port, ()=>{
    console.log(`드가자 ${port}`);
});