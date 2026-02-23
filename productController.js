const path = require('path' );


//Get 
const getAllProduct=(req,res)=>{
   res.sendFile(path.join(__dirname,"../view/product.html"));
}


//Post
const postProduct = (req,res)=>{

    const data = req.body;
    res.json({value:data.productName});

};

module.exports={
    getAllProduct,
    postProduct
}