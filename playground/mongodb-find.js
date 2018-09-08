// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b915ac5eaa962073eae4a0d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     if(err){
    //         console.log('Something went wrong.', err);
    //     }
    //
    // db.collection('Todos').find().count.then((count) => {
    //     console.log(`Todos count: ${count}`);

        db.collection('User').find({name: 'Dominik'}).toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch((err) => {
           console.log('Unable to count dominik users', err);
        });
    // client.close();
});