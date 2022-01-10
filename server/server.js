const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const session = require('express-session');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

const port = 3001;

app.listen(port, () => console.log(`Node js Server ruuning at http://54.180.117.235:${port}/`));
