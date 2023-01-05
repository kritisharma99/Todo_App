const mongoose = require("mongoose");

const dbConnect =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_CONNECT)
    .then(console.log(`DB connected successfully`))
    .catch((err)=>{
    console.log(`Error while connecting to DB`)
    console.log(err);
    process.exit(1);
    })
}

module.exports = dbConnect;