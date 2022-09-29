const express = require('express');
const mongoose = require("mongoose");
const server = express();

server.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
})

server.listen(3000,(err)=> {
    if(err) {
        return console.log(err)
    } else { 
        console.log('The server is running') 
        
    }
})

let pets = ['dog','cat','parret','rabbit']
console.log(pets)
for(let pet of pets) {
    console.log(pet);
}

