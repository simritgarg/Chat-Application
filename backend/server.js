 // Package imports

import express from "express";  // we are importing instead of writing this : const express = require("express");
import dotenv from 'dotenv';  // const dotenv = require("dotenv");
import cookieParser from "cookie-parser";

// Routes import
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

// Express app instance  and setting up the port  and importing dotenv for environment variables.
const app = express();
// fixing the port 
const PORT  = process.env.PORT || 5000;


// Middleware for root routes  (api/auth)
app.use(express.json()); // to parse the incoming request with the JSON payloads ( from req.body)
app.use(cookieParser()); 
app.use("/api/auth",authRoutes) //middleware for root routes
app.use("/api/messages",messageRoutes) 



// app.get("/",(req,res)=>{
//     res.send("Hello world!"); //root route https://localhost:5000/
// });



app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});