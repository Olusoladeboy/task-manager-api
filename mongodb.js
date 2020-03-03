// CRUD
// Create
// Read
// Update
// Delete


// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

// const id = new ObjectID();
// console.log(id.getTimestamp());


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
       return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName);

    // ========================= CREATE ============================= //

    // // Insert One
    // db.collection('users').insertOne({
    //     name: 'Goldblum',
    //     age: 34
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // Insert Many
    // db.collection('users').insertMany([
    //     {
    //         name: 'Emmauel Olusola',
    //         age: 20
    //     },
    //     {
    //         name: 'Blumie Gold',
    //         age: 32
    //     },
    //     {
    //         name: 'Goldie Haned',
    //         age: 19
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to add Users')
    //     }

    //     console.log(result.ops)
    // })

    // ============================== READ ============================ //

    // Reading a file from the database

    // db.collection('users').findOne({ 
    //     _id: new ObjectID('5d74425b1e7af70655d9a93c')
    //  }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to find such user in the database')
    //     }
    //     console.log(user)
    //  });

    //  db.collection('users').find({
    //     age: 20
    //  }).toArray((error, user) => {
    //      if(error){
    //         return console.log(error);
    //      }
    //      console.log(user)
    //  });


    // ====================== UPDATE ============================= //

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5d74425b1e7af70655d9a93a')
    // }, {
    //     $set: {
    //         name: 'Corrected Emmanuel Olusola'
    //     },
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log(result.matchedCount)
    // }).catch((error) => {
    //     console.log(error)
    // });

    // db.collection('users').updateMany({
    //     name: 'Emmanuel Olusola'
    // }, {
    //     $set: {
    //         name: 'Emmanuel'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })

    // ========================== DELETE ===================== //

    db.collection('users').deleteMany({
        age: 20
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})