const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((res) => {
// console.log(res);
// });

// Todo.findOneAndDelete({_id: ﻿"5b97d0a07c0be69a542d2ac4"}).then((res) => {
//    console.log(res);
// });

// Todo.findByIdAndRemove(﻿"5b97d0357c0be69a542d2a94").then((todo) => {
//    console.log(todo);
// });