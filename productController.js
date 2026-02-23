const path = require('path' );


//Get 
const getAllProduct=(req,res)=>{
   res.sendFile(path.join(__dirname,"../view/product.html"));
}


//Post
const postProduct = (req, res, next) => {
    try {
        const data = req.body;

        if (!data.productName) {
            const error = new Error("Product name is required");
            error.status = 400;
            throw error;
        }

        res.json({ value: data.productName });

    } catch (err) {
        next(err); // send error to centralized middleware
    }
};

module.exports={
    getAllProduct,
    postProduct

}
