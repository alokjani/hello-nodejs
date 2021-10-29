const express = require('express')
const app = express()
const os = require('os')

app.get('/', function(request,result){
    result.send('Hello World! from host: ' + os.hostname())
})
app.listen(8080,"0.0.0.0",function(){
    
    console.log('hello world app is listening on port 8080')
})
