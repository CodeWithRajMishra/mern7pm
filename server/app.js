import express from "express";
const app= express();
import session from "express-session";
import web from "./routes/web.js";

app.use(session({
    name:"rajeshsession",
    secret:"iamkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))


app.use("/", web);

app.listen(8000, ()=>{
    console.log("Server run on 8000 Port!");
})