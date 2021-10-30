var express = require('express');  
var app = express();   
app.get('/', ((req, res) =>{  
  res.send('Welcome to JavaTpoint!');  
}));  
app.get('/help', ((req, res)=> {  
  res.send('How can I help You?');  
}));  
var server = app.listen(8000,(()=>{  
  var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
}))
  