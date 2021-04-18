// ~/cours-nodejs/server/routes/todosMongoRoute.js

const express = require('express');
const todoModel = require('../models/todoModel');

const Router = express.Router();

// GET: /api/todos
Router.get('/todos', (req, res, next) => {
    todoModel.find()
    .then(todos => res.status(200).send(todos))
    .catch(error => next(error));
});

// GET: /api/todos/:todoId
Router.get('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.findOne({_id: id})
    .then(todo => {
        if (todo === null)
            res.status(200).send("La todo n'a pas été trouvé.")
        res.status(200).send(todo)
    })
    .catch(error => next(error));
});

// POST: /api/todos
Router.post('/todos', (req, res, next) => {
    const todo = new todoModel({
        body: req.body.body,
        user: req.body.userId,
    });

    todo.save()
    .then(todo => {res.status(200).send(todo)})
    .catch(error => {next(error)});
});

// PUT /api/todos/:todoId
Router.put('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.updateOne({_id: id}, {$set: {body: req.body.body}})
    .then(tw => {res.status(200).send("Todo bien modifié.")})
    .catch(error => {next(error)});
});

// DELETE /api/todos/:todoId
Router.delete('/todos/:todoId', (req, res, next) => {
    const id = req.params.todoId;

    todoModel.deleteOne({_id: id})
    .exec()
    .then(result => {res.status(202).send('Todo bien supprimé.')})
    .catch(error => {next(error)});
})

module.exports = Router;