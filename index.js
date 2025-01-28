let express = require('express');
let app = express();

app.get("/", (req, res) =>{

    // Taking Request From Query ?name=Henil&age=21
    console.log(req.query);

    // Taking Request From Params /:name/:age
    // req.params.name

    // Send a json as response
    res.json(req.query);
    
    // Redirect From One Page to Another
    // res.redirect("https://google.com");
    
    // Send a file as response
    // __dirname shows current directory path
    // res.sendFile(`${__dirname}/index.html`);
})

app.listen(3000,()=>{ console.log("Server is running") });