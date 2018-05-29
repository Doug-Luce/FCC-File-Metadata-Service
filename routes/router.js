const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const multer  = require('multer');
const upload = multer();


router.get('/', indexController.homePage);
router.post('/', upload.single('file'), indexController.submitFile);


module.exports = router;