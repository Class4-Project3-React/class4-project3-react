const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");

app.use(cors());
app.use("/", router);

const port = 3001;

app.listen(port, () => console.log(`Node js Server ruuning at http://localhost:3001/`));