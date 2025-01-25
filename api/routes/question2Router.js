var express = require('express');
var router = express.Router();
const {
   compareCheckSumOfDB,
   compareCountOfDB,
   compareRowsOfDB,
   dataSampling,
   schemaVerification
} = require("../controllers/question2Controller");

router.get('/count/:tableName',compareCountOfDB);
router.get('/checksum/:tableName',compareCheckSumOfDB);
router.get('/rows/:tableName',compareRowsOfDB);
router.get('/sample/:tableName',dataSampling);
router.get('/schema/:tableName',schemaVerification);


module.exports = router;



