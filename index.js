require('dotenv').config();
require('./core/database');
let express = require('express');
let app = express();

let userModel = require('./models/users');

app.get("/users", async (req, res) => {
    let search = req.query.search;
    search = new RegExp(search, "i")

    let users = await userModel.find({
        $or: [
            { name: search },
            { emailId: search }
        ]
    });
    res.json(users);
});

app.get("/addUser", async (req, res) => {
    let request = req.query;
    if (request.name != null && request.emailId != null && request.password != null) {
        let saved = await userModel.create(request);
        res.json(saved);
    } else {
        res.json({
            message: "All keys are required!"
        })
    }
})



app.listen(3000, () => { console.log("Server is running") });