// Test용 models.js => 나중에 각자 models.js 따로 관리 할 예정
// 밑에 sql은 권원현 server/db 세팅 test용으로 작성한 것임 -> sql 구문은 작성하기 나름이기 때문에 본인이 원하는 구문 쓰면 됨

const con = require("../utils/db");
const modelExports = (module.exports = {});

modelExports.ReactTest = () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM users where id='wh_kwon';"; // 참고) test용이기 때문에 mysql에 dummy data 입력했고 그걸 호출하는 raw한 sql문임
        con.getConnection((err, connection) => {
            try {
                if(err) throw err;
                console.log("Connection Success");

                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log("SELECT Error");
                    } else {
                        if(result.length === 0) {
                            console.error("DB response NOT Found");
                        } else {
                            resolve(result);
                            console.log("Read data OK");
                        }
                    }
                });
                connection.release();
            } catch(err) {
                console.error("pool Test Error");
            };
        });
    });
};