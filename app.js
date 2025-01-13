import express, { response } from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";

const uri = "your-mongo-uri-here"; //i am NOT putting my mongodb credentials in a github repo
const app = express();

const client = new MongoClient(uri);
client.connect();
let userInfoDb = client.db("userinfoDb");
let userinfo = userInfoDb.collection("userinfo");

let userGlobal;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("main");
})

app.post("/validateAcc", async (req, res) => {
    let user = req.body.user;
    let passw = req.body.passw;
    
    console.log(user, passw);
    let findInfo = await userinfo.findOne({
        username: user
    })
    if(findInfo){
        if(findInfo.password == passw){
            userGlobal = user;
            res.send({"message":"euge", "user":userGlobal});
        }else{
            console.log("wrong password/existing user");
            res.send({"message":"This user exists, but the password is incorrect. Pick a different username if you're signing up, or double-check your password if you're logging in."});
        }
    }else{
        console.log("user not found");
        res.send({"message":"This user does not exist in the database. Would you like to create an account?"});
    }
})

app.post("/createAcc", (req, res)=>{
    let user = req.body.user;
    let passw = req.body.passw;

    userinfo.insertOne({
        username:user,
        password:passw,
        highscore:0
    })

    userGlobal = user;

    res.send({"message":"euge","user":userGlobal});
})

app.post("/updateHighscore", async (req, res)=>{
    let highscore = req.body.highscore;
    let user = req.body.user;
    highscore = parseInt(highscore);
    let findInfo = await userinfo.findOne({username: user});
    if(findInfo.highscore < highscore){
        userinfo.updateOne({ username: user}, {$set: { highscore: highscore }});
    }
    res.send({"message":"euge", "highscore":findInfo.highscore});
})

app.get("/leaderboardSetup", async (req, res)=>{
    let findInfo = userinfo.find({}).sort({highscore:-1});
    findInfo = await findInfo.toArray();
    res.send({"message":"euge", "leaderboard":findInfo});
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});