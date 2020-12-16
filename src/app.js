const express = require("express"),
app = express();
const serverless = require("serverless-http");

const router = express.Router();

router.get('/',(req,res) => {
    res.json(
        {
            'name' : "akshat"
        }
    )
});

app.use('/.netlify/functions/app',router);

module.exports.handler = serverless(app);
