// REQUIRE ALL THE MODULES HERE ONLY
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoute');

// SET INSTANCE HERE ONLY
const app = express();

// VARIABLES DECLARATION HERE ONLY
const PORT = process.env.PORT || 4000;

app.use('/api/user' , userRouter);

async function dbConnect(){
    await mongoose.connect(process.env.DATABASE_URL).then(()=> {
        console.log("DB CONNECTED")
    });
}

dbConnect().then(()=>{
    app.listen(PORT , () => {
        console.log("Server is running at port : " + PORT);
    })
})

