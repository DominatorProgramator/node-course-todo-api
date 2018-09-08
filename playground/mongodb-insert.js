// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collection('User').insertOne({
       name: 'Mike',
       age: 29,
       location: 'Pardubice'
    }, (err, res) => {
        if(err){
            return console.log('Unable to connect to the database.');
        }
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    });

    client.close();
});