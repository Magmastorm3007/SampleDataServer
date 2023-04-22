const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const { response } = require('express')

const app=express()
app.use(cors())
const  port = process.env.PORT || 5000;
app.use(express.json())
const url='mongodb+srv://user:aloo@cluster0.ybbgwrx.mongodb.net/sample'

app.use('/api',require('./routes/info'))
mongoose.connect(url).then(() => {
    app.listen(port, () => {

        console.log(`Server running at http://localhost:${port} and database connected`);
    

        });
    },
    err  => {
    {
    console.log("Error connecting Database instance due to:", err);
    }
    });
    