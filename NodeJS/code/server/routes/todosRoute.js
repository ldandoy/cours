// ~/cours-nodejs/server/routes/todosRoute.js

const express = require('express');
const Router = express.Router();

let todos = [{
    id: 1,
    nom: "Todo 1",
    content: "Contenu de la todo 1"
},{
    id: 2,
    nom: "Todo 2",
    content: "Contenu de la todo 2"
},{
    id: 3,
    nom: "Todo 3",
    content: "Contenu de la todo 3"
}]

Router.get('/todos', (req, res) => {
    res.status(200).json(todos)
})
  
Router.get('/todos/:id', (req, res) => {
    id = req.params.id
    res.status(200).json(todos[id])
})
  
Router.post('/todos', (req, res) => {
    todo = req.body
  
    todos.push(todo)
  
    res.status(200).json(todos)
})
  
Router.put('/todos/:id', (req, res) => {
    id = req.params.id
    newTodo = req.body
  
    todos.forEach((todo, key) => {
        if (todo.id == id) {
            todos[key] = newTodo
        }
    })
  
    res.status(200).json(todos)
})
  
Router.delete('/todos/:id', (req, res) => {
    id = req.params.id
    todos = todos.filter(todo => todo.id != id)
    res.status(200).json(todos)
})

// Export du module pour pouvoir l'intégrer dans le require
module.exports = Router;