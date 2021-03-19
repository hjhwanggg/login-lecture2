const express = require("express");
const home = require("./src/routes/home");  // index.js 파일 읽음
const app = express();

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);  
   
module.exports = app; 