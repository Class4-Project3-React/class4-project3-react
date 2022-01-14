const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.use(express.static("public"));

const port = 3001; // 서버 포트 변경 금지. = 1

app.listen(port, ()=>{
    console.log(`드가자 ${port}`);
});