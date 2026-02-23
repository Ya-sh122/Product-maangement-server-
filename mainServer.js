const express = require('express');
const app= express();

const productRoutes = require('./routes/productRoute')


app.use(express.static('public'))
app.use(express.json());


app.use('/api/products', productRoutes)



app.listen(3000,()=>{console.log('Server is running at port 3000')});
