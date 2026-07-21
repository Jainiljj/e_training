console.log('This is node.js');

const fs = require('fs');

fs.writeFile('output.txt','hELLO WORLD', (err)=> {
    if (err){
        console.error('Error writing to files:',err);
    }else{
        console.log("file written");
    }
    }
);