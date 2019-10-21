const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.post('/product',(req,res,next) => {   
    console.log(req.body);
    res.redirect('/');
    
});

router.get('/add-product',(req,res,next) => {
    res.sendfile(path.join(rootDir,'views','add-product.html'));
    //res.sendFile('./views/add-product.html');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><button type="submit">Add product</button></form>');
});

module.exports = router;