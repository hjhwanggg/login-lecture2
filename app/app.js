const express = require("express");
const bodyParser = require("body-parser");
const home = require("./src/routes/home");  // index.js 파일 읽음
const app = express();

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url을 통해 전달되는 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);  
   
module.exports = app; 