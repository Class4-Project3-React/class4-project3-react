const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
require("express");

// Contents_Article_List
modelExports.contents_Article_List_DB = () => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM article;";
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("READ Article List Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Article_List", err);
      }
    });
  });
};

// Contents_Article_Modal
modelExports.contents_Article_Detail_DB = () => {
  return new Promise((resolve, reject) => {
    let detailNum = controllers.detailNum;
    let sql = `SELECT A.no, A.media, A.editor, A.editor, A.date_article, A.title, A.desc, A.img, C.id, C.text, C.date_comment
    FROM article AS A INNER JOIN comments AS C
    ON A.no = C.page_no
    WHERE A.no="${detailNum}"`;
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("READ Article Detail Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Article_Detail");
      }
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
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("INSERT Comment in table Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Add Comment");
      }
    });
  });
};

//======================일단 내꺼 Test용
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

modelExports.postTodo = () => {
    let title = controllers.title;
    let contents = controllers.contents;

    return new Promise((resolve, reject) => {
        const sqlInsert = "INSERT INTO mypage_todo (title, contents) VALUES (?, ?);";
        try{
            db.getConnection((err, connection) => {
                connection.query(sqlInsert, [title, contents], (err, result, fileds) => {
                    resolve(result);
                    console.log("Todo insert ok");
                });
                connection.release();
            });
        } catch(err){
            console.log("err 내용은", err)
        }
    })
}

modelExports.deleteTodo = () => {
    let title = controllers.title;

    return new Promise((resolve, reject) => {
        const sqlDelete = "DELETE FROM mypage_todo WHERE title = ?;";
        try{
            db.getConnection((err, connection) => {
                connection.query(sqlDelete, [title] , (err, result, fileds) => {
                    resolve(result);
                    console.log("Todo insert ok");
                });
                connection.release();
            });
        } catch(err){
            console.log("err내용은", err)
        }
    })
}


//====== Profile

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
        let name = controllers.name;
        let profile = controllers.profile;
        let favorite = controllers.favorite;

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
