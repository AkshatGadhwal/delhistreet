const express = require("express"),
app = express();
const ejs = require('ejs');
const serverless = require("serverless-http");

const router = express.Router();

app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);

router.get('/',(req,res) => {
    res.render("home");
});

app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);
