var express = require('express');
var	router 	= express.Router();
var objectModels = require('../controllers/objectModels');

router.route('/models')
	  .get(objectModels.getModels);

router.route('/getAmericanRoomTranslations')
	  .get(objectModels.getAmericanRoomTranslations);
	  
module.exports = router;