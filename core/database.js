let mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection
.on('open', ()=> { 
    console.log("Database Connected");
})
.on('error', (error)=>{
    console.log(`Connection failed: ${error}`);
})