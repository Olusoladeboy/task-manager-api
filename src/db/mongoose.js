const mongoose = require('mongoose');

// const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';
const connectionURL = 'mongodb+srv://Olusola:olusola10000@cluster0-lo248.mongodb.net/test';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Creating a database model




// new User({
//     name: 'sola',
//     email: 'eoyewole508@stu.ui.edu.ng',
//     age: 23,
//     password: 'Password'
// }).save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// new Task({
//     description: '   Finish up exam reading timetable   '
// }).save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })
