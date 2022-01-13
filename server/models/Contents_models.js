const con = require("../utils/db");
const modelExports = module.exports = {};
const controllers = require("../controllers/controllers");
require("express");

// Contents_Article_List
modelExports.contents_Article_List_DB = () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM article;";
        con.getConnection((err, connection) => {
            try {
                if(err) throw err;
                console.log("Connect Success");

                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log("Error: ", err);
                    } else {
                        if(result.length === 0) {
                            console.error("DB response NOT Found");
                        } else {
                            resolve(result);
                            console.log("READ Article List Success");
                        }
                    }
                });
                connection.release();
            } catch(err) {
                console.error("pool Error: Article_List", err);
            };
        });
    });
};

// Contents_Article_Modal
modelExports.contents_Article_Detail_DB = () => {
    return new Promise((resolve, reject) => {
        let detailNum = controllers.detailNum;
        let sql = `SELECT * FROM article where no="${detailNum}";`;
        con.getConnection((err, connection) => {
            try {
                if(err) throw err;
                console.log("Connect Success");

                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log("Error: ", err);
                    } else {
                        if(result.length === 0) {
                            console.error("DB response NOT Found");
                        } else {
                            resolve(result);
                            console.log("READ Article Detail Success");
                        }
                    }
                });
                connection.release();
            } catch(err) {
                console.error("pool Error: Article_Detail");
            };
        });
    });
};

// Article_Comment Insert
modelExports.contents_Article_AddCommentt = () => {
    return new Promise((resolve, reject) => {
        let comment = controllers.comment;
        let page_no = controllers.page_no;
        let sql = `INSERT INTO comments (id, text, page, page_no) VALUES ('진경이 session', '${comment}', 'Contents', '${page_no}');`;
        con.getConnection((err, connection) => {
            try {
                if(err) throw err;
                console.log("Connect Success");

                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log("Error: ", err);
                    } else {
                        if(result.length === 0) {
                            console.error("DB response NOT Found");
                        } else {
                            resolve(result);
                            console.log("INSERT Comment in table Success");
                        }
                    }
                });
                connection.release();
            } catch(err) {
                console.error("pool Error: Add Comment");
            };
        });
    });
};
