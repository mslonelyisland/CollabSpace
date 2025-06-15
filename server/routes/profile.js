const express = require('express');
const multer = require('multer');
const router = express.Router();
const userProfile = require('../controllers/userProfile');


const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post('/:userId', upload.single('image'), userProfile);
