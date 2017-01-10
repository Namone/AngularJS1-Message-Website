var express = require('express');
var router = express.Router();

// This file will handle post/get requests from Angular
router.get('/', function(req, res, next) {
    
}); 

router.post('/messages', function(req, res, next) {
    console.log('Revieved request!');

    res.status(200).json({
        title: 'Success!',
    });
});

module.exports = router;