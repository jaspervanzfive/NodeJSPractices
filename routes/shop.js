//const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next) => {   
      res.sendfile('./views/shop.html');
    //res.sendfile(path.join(rootDir,'views','shop.html'));
});


module.exports = router;