// const express = require('express')
// const cors = require('cors')
// const multer = require('multer')
// const axios = require('axios')
// // configuring Multer to use files directory for storing files
// // this is important because later we'll need to access file path
// const storage = multer.diskStorage({
//   destination: './uploads',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   },
// });
//
// const upload = multer({ storage });
//
// const router = express.Router()
// router.use(cors())
// // import handle functions from controller
// const uploadFilesController = require('../controllers/uploadFilesController')
//
// router.route('/')
//   .get(uploadFilesController.index)
//   .post(
//     upload.single('file'), uploadFilesController.create
//   )
//
// module.exports = router
