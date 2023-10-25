const express = require("express")
const app = express();

const Empdata = require('./model/Emp');

var bodyParser = require('body-parser')

const mongoose = require("mongoose");


let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// mongoose.connect('mongodb://127.0.0.1:27017/dummy', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected! successfull-------- '));

mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh87698-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.get('/123' ,async(req,res) =>{
    try {
        const tasks = await Empdata.find(req.body);
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error })

    }
})



app.post('/app1' ,async(req,res) =>{
    try {
        const task = await Empdata.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })
    }
})







app.listen(port);