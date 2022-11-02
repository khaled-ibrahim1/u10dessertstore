const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userid: {type:String, required:true, },
        products: [
            {
                productId:{
                    type:String,
                },
                quantity:{
                    type:Number,
                    default:1,
                },
            },
        ],
        amount:{type:Number, required:true},
        adress:{type:Object, required:true},
        status:{type:string, required:"pending"},

       
    

    },
    {timestamps:true}
);

module.exports = mongoose.model("Order", OrderSchema);