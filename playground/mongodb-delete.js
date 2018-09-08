const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res.result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    // challange
    // db.collection('User').deleteMany({name: 'Dominik'}).then((res) => {
    //     console.log(res.result);
    // });

    db.collection('User').findOneAndDelete({_id: new ObjectID(﻿"5b939cf34ec03df84f183400")}).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }).catch((err) => {
        console.log('Unable to delete item', err);
    });
});