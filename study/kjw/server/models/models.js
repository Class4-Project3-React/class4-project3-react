const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "thdrn48",
    database: "crud_test",
});
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers.js")


// models => "Promise가 좋아" => 일반 함수 return은 값을 못받아와 결론은 promise가 짱이야 => 콜백할때 가독성이 좋아
modelExports.getTodo = () => {
    return new Promise((resolve, reject) => {
        const sqlSelect = `SELECT * FROM mypage_todo;`;
        try {
            db.getConnection((err, connection) => {
            connection.query(sqlSelect, (err, result, fields) => {
               resolve(result);
               console.log("DB READ OK");
            });
            connection.release();
            }); 
        } catch(err) {
            console.log("err 내용은", err);
        }
})};


modelExports.getProfile = () => {
    return new Promise((resolve, reject) => {
        const sqlSelect = "SELECT * FROM mypage_profile;";
        try {
            db.getConnection((err,connection) => {
                connection.query(sqlSelect, (err, result, fields) => {
                    resolve(result);
                    console.log("Profile DB READ OK!")
                });
                connection.release();
            });
        } catch(err) {
            console.log("err 내용은", err)
        }
    })
}

modelExports.putProfile = () => {
    return new Promise((resolve, reject) => {
        const name = req.body.name;
        const profile = req.body.profile;
        const favorite = req.body.favorite;
        const sqlUpdate = "UPDATE mypage_profile SET profile = ?, favorite = ? WHERE name = ?;";
        try{
            db.getConnection((err,connection) => {
                connection.query(sqlUpdate, [profile, favorite ,name], (err, result, fields) => {
                    resolve(result);
                    console.log("Profile DB READ OK!")
                });
                connection.release();
            })
        } catch(err) {
            console.log("err 내용은", err)
        }
    })
}