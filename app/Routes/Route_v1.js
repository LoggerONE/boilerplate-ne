const express = require('express');
const router = express.Router();

router.get('/', [], function(req, res, next) {
	var resData = {
		"state_code" : "100",
		"state_message" : "ok" 
	}
	res.render('welcome',resData);
});

router.get('/json', [], function(req, res, next) {
	var resData = {
		"state_code" : "100",
		"state_message" : "ok"
    }
    
	res.json(resData);
});

router.post('/json', [util.allow_cors], function(req, res, next) {
	var resData = {
		"state_code" : "100",
		"state_message" : "ok"
    }
    
	res.json(resData);
});

module.exports = router;