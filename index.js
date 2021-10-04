const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.json('Hey This Is working,Running on Port: '+PORT);
})


app.listen(PORT,()=>{
    console.log('listening on port: '+PORT+'🚀');
});