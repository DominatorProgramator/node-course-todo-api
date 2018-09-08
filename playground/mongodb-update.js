const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to db.');
    }
    console.log('Successfully connected to Mongodb server');

    const db = client.db('TodoApp');

//     db.collection('Todos').findOneAndUpdate({_id: ﻿ObjectID(﻿"5b9395214ec03df84f1831cd")
// }, {
//         $set: {
//             completed: true
//         }
//     }, {
//         returnOriginal: false
//     }).then((res) => {
//       console.log(res);
//     });

    db.collection('User').findOneAndUpdate({_id: new ObjectID(﻿"5b93b84a4ec03df84f183a09")},
    {$inc: {age: -1}, $set: {name: 'Vaclav'}},
    {returnOriginal: false}).then((res) => {
       console.log(res);
    });
});