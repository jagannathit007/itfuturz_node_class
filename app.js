require('dotenv').config();
require('./config/database');
let express = require('express');
let app = express();

//ADD THIS LINE TO ACCEPT JSON FROM POST REQUEST BODY.
app.use(express.json());

//Import Models
let students = require('./models/students');



//Fetch Students Data
app.get("/students", async (req, res)=>{
    try{
        let studentsData = await students.find();
        res.json({
            message: "Students data fetched successfully!",
            data: studentsData
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})

app.post("/students/add", async (req, res) => {
    try{
        let { name, mobile, className } = req.body;

        if(Boolean(name) && Boolean(mobile) && Boolean(className)){

            let count = await students.countDocuments({
                mobile: mobile
            });

            if(count > 0){
                res.json({
                    message: 'Student is already added with this number!'
                })
            }else{
                let savedData = await students.create({
                    name: name,
                    mobile: mobile,
                    className: className
                });
    
                res.json({
                    message: 'Student added successfully!',
                    data: savedData
                })
            }
        }else{
            res.json({
                message: 'Invalid parameters'
            })
        }

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
})


app.listen(process.env.PORT, ()=> { 
    console.log(`Server is running on ${process.env.PORT}`);
});