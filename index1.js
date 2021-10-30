var express=require("express")
var app=express()
app.get('/',((req,res)=>{
   res.send("Hello World!")
   console.log("Hello Muskan")
}));
app.listen(3000);
// here we gave routes as '/' .

var express = require('express');
var app = express();
app.get('/hello',((req, res)=>{
   res.send("Hello World!");
   console.log("Hello Mussu")
}));
app.listen(2000);
// here we gave routes as '/hello'.

var express = require('express');
var app = express();
app.get('/hello',((req, res)=>{
   res.send("Hello World!");
   console.log("Muskan")
}));
app.post('/hello',((req, res)=>{
   res.send("You just called the post method at '/hello'!\n");
   console.log("Mickey")
}));
app.all('/test', ((req, res)=>{
    res.send("HTTP method doesn't have any effect on this route!");
    console.log("All")
 }));
app.listen(3000);
// here we use three routes for get and post we use '/hello' ,all we use '/test' routes.
