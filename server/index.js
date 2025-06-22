
const express = require('express');
const dotenv = require('dotenv');
const cors =require('cors');
const mongoose= require('mongoose');


const app = express();
const cookieParser = require('cookie-parser');

//load .env first
dotenv.config();

// database connection, calling from env
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('✅ DB connected!'))
  .catch(err => console.error('❌ Connect failed', err));

// database port
const port = 5000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/', require('./routes/authRoutes.js'));
app.use('/profileinformation', require('./routes/profile.js'));

// Server
app.listen(port, () =>console.log(`Server is running on ${port}`))