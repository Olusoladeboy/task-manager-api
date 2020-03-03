const express = require('express');
const app = express()

require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')
const Task = require('./models/task')
const auth = require('./middleware/auth')

const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if(req.method === 'GET' || 'POST'){
//         res.status(503).send('This Website is under maintenance, Kindly check back pls!')
//         next()
//     }

// });  

// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         filesize: 1000000
//     },
//     fileFIlter(req, file, cb) {
//         if(!file.originalname.match(/\.(jpg|jpeg)$/)){
//             return cb(new Error('Please upload an image'))
//         }
//         cb(undefined, true)
//     } 
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(express.json());

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('App is served up on ', port)
});
