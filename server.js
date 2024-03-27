//jshint esversion:6
const express=require("express");
const app=express();
app.get("/",function(req,res){
res.send("<h1 style='color:blue'>hello , mai senpai!</h1>")
});
app.get("/contact",function(req,res){
    res.send("contact me at :  mai senpai fan page")
})
app.get("/about",function(req,res){
    res.send("<p>mai senpai:<br> </br>  bunny girl with black hair and blue eyes!</p>")
})
app.get("/hoobies",function(req,res){
    res.send("<h2>eating cream bun</h2>")
})
app.listen(3000,function(){
    console.log("the server is running !")
});