const express = require('express');
const multer = require('multer');
const router = express.Router();
const {userProfile} = require('../controllers/profileController');


const storage = multer.memoryStorage(); 
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
    });

router.post('/:userId', upload.single('image'), userProfile);
module.exports = router;