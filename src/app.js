const express = require("express"),
app = express();
const ejs = require('ejs');
const serverless = require("serverless-http");

const router = express.Router();

app.set("view engine","html");
// app.engine('ejs', require('ejs').__express);

app.use(express.static('../'));
app.engine('html', require('ejs').renderFile);

router.get('/',(req,res) => {
    res.json({
        'Developed by: ':"Akshat",
        'Issue: ':"it can only be a single page website :)"
    });
});

app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);
