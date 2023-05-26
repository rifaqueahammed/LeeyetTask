const express = require('express');
const dbconnection = require("./Config/Connection");
const dotenv = require("dotenv");
// const cors = require("cors")
const bodyParser = require('body-parser');


const app = express();
const port = 4000;
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
dbconnection();

const userRouter = require("./Routes/User");

// routers
app.use("/", userRouter);


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
  });