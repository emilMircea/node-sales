const express = require('express')
const logger = require('morgan')
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser')
const controller = require('./controllers/uploadFilesController');

// import routes
// const users = require('./routes/users')
// const uploadFiles = require('./routes/uploadFiles')

const app = express()

// middlewares
app.use(logger('dev'))

app.get('/', controller.index


// (req, res) => {
//
//   res.send(contents)
// }


)

// routes
// app.use('/users', users)
// app.use('/uploadFiles', uploadFiles)


// start server
const port  = app.get('port') || 3000

app.listen(port, () => console.log(`Server is listening on port: ${port}`))
