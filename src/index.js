import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import express from 'express';
const app = express();
;( async () => {
    try{
        await mongoose.connect('mongodb+srv://prachitruejain:Prachi123@cluster0.fuwqeno.mongodb.net') //`${process.env.MONGODB_URI}/`)
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error
        })

        app.listen(8000, () => {
            console.log(`App is listening on port 8000`);
        })

        app.get("/", (req, res)=>{
            res.send("Hi");
        })
        // app.listen(process.env.PORT, () => {
        //     console.log(`App is listening on port ${process.env.PORT}`);
        // })
    } catch (error){
        console.log("ERROR", error);
        throw error;
    }
})()
