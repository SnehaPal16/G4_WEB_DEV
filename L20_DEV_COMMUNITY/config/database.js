const mongoose = require("mongoose");

const dbConnect= async()=> {
  await mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("DB CONNECTED");
  });
}


module.exports = dbConnect;