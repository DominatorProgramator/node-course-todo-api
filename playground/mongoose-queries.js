const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id =﻿﻿"5b93d35e2fa22e06f39d0426";

if(!ObjectID.isValid(id)) {
    console.log('ID not valid.');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo by Id', todo)
// }).catch((err) => console.log(err));


User.findById(id).then((user) => {
    if(!user) {
       return console.log('Id not found')
    }
   console.log('User by id', user)
}).catch((e) => console.log(e));
