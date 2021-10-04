const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.json('Hey This Is working');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('listening on port: '+PORT+'🚀');
});