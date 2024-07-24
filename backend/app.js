const express = require('express'); 
require('dotenv/config'); 

const cors = require('cors');


// Server Initialization 
const app = express(); 
app.use(cors());
const PORT = process.env.PORT; 

// Middleware 
app.use(express.json()); 

// Check for errors
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running on port: "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);