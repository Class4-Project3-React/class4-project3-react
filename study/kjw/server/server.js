const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const router = require("./routes/routes.js");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

const port = 3001;

app.listen(port, () => console.log(`http:localhsot:3001/`));

