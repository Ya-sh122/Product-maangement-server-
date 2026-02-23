const express = require('express');
const route = express.Router();

const productControl  = require('../controller/productController');


//Fetch all products
route.get('/', productControl.getAllProduct);


//add a new product
route.post('/', productControl.postProduct);



module.exports=route;



