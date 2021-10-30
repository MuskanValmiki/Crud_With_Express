var express = require('express');  
var app = express();  
app.get('/',((req, res)=>{  
   console.log("King");  
   res.send('Welcome to JavaTpoint!');  
})) 
// get the data

app.post('/', ((req, res)=>{  
   console.log("Queen");  
   res.send('I am Impossible! ');  
}))  
// post the data

app.delete('/del_student', ((req, res)=>{  
   console.log("baklol");  
   res.send('I am Deleted!');  
}))
// delete the data

app.put('/enrolled_student',((req, res)=>{  
   console.log("lol");  
   res.send('I am an enrolled student.');  
}))
// add the data 

app.put('/ab*cd',((req, res)=>{     
   console.log("ladaku log");  
   res.send('Pattern Matched.');  
}))
var server = app.listen(8000,(()=>{  
var host = server.address().address  
  var port = server.address().port  
console.log("paglu friends", host, port)  
})) 
