const mongoose = require("mongoose");

// Connect to the database
mongoose.connect("mongodb://localhost:27017/LoginSignup")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    });

// Define the schema
const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    results: [{
        scorededuction: Number,
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

const collection = new mongoose.model("LogInConnection", LogInSchema);

module.exports = collection;


// const mongoose = require("mongoose")

// //to create database
// mongoose.connect("mongodb://localhost:27017/LoginSignup")   //to connect node to mongodb database, loginSignup is name of db

// .then(() =>{
//     console.log("mongodb connected");
// })

// .catch(() => {
//     console.log("failed to connect");
// })

// //to create format of document
// const LogInSchema = new mongoose.Schema({
//     name: {
//         type:String, 
//         required:true //compulsory to fill
//     },
//     password: {
//         type:String, 
//         required:true
//     }
// })

// const collection = new mongoose.model("LogInConnection", LogInSchema)

// module.exports = collection