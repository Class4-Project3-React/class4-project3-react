const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
require("express");

// Contents_Article_List
modelExports.contents_Article_List = () => {
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
modelExports.contents_Article_Detail = () => {
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
modelExports.contents_Article_AddComment = () => {
  return new Promise((resolve, reject) => {
    let comment = controllers.comment;
    let page_no = controllers.page_no;
    let userid = controllers.userid;
    let sql = `INSERT INTO comments (id, text, page, page_no) VALUES ('${userid}', '${comment}', 'Contents', '${page_no}');`;
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

// Article_Comment Read
modelExports.contents_Article_ReadComment = () => {
  return new Promise((resolve, reject) => {
    let no = controllers.no;
    let sql = `SELECT * FROM comments WHERE page_no='${no}';`;
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

