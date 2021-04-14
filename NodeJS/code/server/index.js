// ~/cours-nodejs/server/index.js

const express = require('express')
const morgan  = require('morgan')

const app = express()
const port = 3000

app.use(morgan())

app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

app.get('/todos/:todoId', (req, res) => {
  id = req.params.todoId
  res.status(200).json(todos[id])
})

app.post('/todos', (req, res) => {
  todo = req.body

  todos.push(todo)

  res.status(200).json(todos)
})

app.patch('/todos/:todoId', (req, res) => {
  todoId = req.params.todoId
  todoUpdated = req.body

  todos.map((todo, index) => {
    if (todo.id == todoId) {
      todo = todoUpdated
    }
  })

  res.status(200).json(todos)
})

app.delete('/todos/:todoId', (req, res) => {
  todoId = req.params.todoId

  todos = todos.filter(function(todo, index, arr){ 
    return todo.id > todoId;
});

  res.status(200).json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})