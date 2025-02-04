let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

mongoose.connection
.on('open', ()=> {console.log('Database connected')})
.on('error', (error)=> console.log(`Database error: ${error}`));