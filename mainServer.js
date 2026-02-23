const express = require('express'); 
const app= express();

const productRoutes = require('./routes/productRoute')

app.use(express.static('public'))
app.use(express.json());

app.use('/api/products', productRoutes)



// Centralized Error Handler (ALWAYS LAST)
app.use((err, req, res, next) => {
    console.log("Error:", err.message);
    res.status(err.status || 500).json({
        message: err.message
    });
});



app.listen(3000,()=>{console.log('Server is running at port 3000')});
