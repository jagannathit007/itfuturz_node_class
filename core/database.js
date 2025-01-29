let mongoose = require('mongoose');

mongoose.connect('');
mongoose.connection
.on('open', ()=> { 
    console.log("Database Connected");
})
.on('error', (error)=>{
    console.log(`Connection failed: ${error}`);
})