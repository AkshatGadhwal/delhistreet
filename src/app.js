const express = require("express"),
app = express();
const serverless = require("serverless-http");

const router = express.Router();

app.set("view engine","ejs");

router.get('/',(req,res) => {
    res.josn({'name':"akshat"});
});

app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);
