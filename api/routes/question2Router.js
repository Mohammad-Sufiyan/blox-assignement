var express = require('express');
var router = express.Router();
const {
   compareCheckSumOfDB,
   compareCountOfDB,
   compareRowsOfDB,
   schemaVerification
} = require("../controllers/question2Controller");

router.get('/count/:tableName',compareCountOfDB);
router.get('/checksum/:tableName',compareCheckSumOfDB);
router.get('/rows/:tableName',compareRowsOfDB);
router.get('/schema/:tableName',schemaVerification);


module.exports = router;



