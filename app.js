const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

const api = process.env.API_URL;

app.use(cors())
app.options('*',cors())
app.use(bodyParser.json());
app.use(morgan('tiny'))



mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    dbName : 'ecommerce-database'
})
.then(()=>{
    console.log('we connected mong0')
})
.catch((err)=>{
    console.log(err)
})



app.listen(3000, ()=>{
    console.log(api);
    console.log("server is running");
})