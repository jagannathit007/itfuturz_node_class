require('./core/database');
let express = require('express');
let app = express();



app.listen(3000,()=>{ console.log("Server is running") });