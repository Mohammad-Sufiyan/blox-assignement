var express = require('express');
var router = express.Router();
const {transferMoneyLogic} = require("../controllers/question5Controller");

router.post('/transfer',transferMoneyLogic);

module.exports = router;



