//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
var password = "";

function checkPassword (req, res, next){
    if (req.body["password"]==="ILoveProgramming") {
        next();
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    };
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.use(checkPassword);
// POST method route
app.post('/check', (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
  })


app.listen(3000,()=>{
    console.log("Example app is listening on port 3000")
})



