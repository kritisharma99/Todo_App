const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:[true,"Tilte is required"],
        maxLength:[30,"Max length is upto 30 characters"]
    },
    tasks:{
        type:[{
            type:String
        }]
    },
    isHighlighted :{
        type:Boolean,
        default : false
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model("Todo", todoSchema);