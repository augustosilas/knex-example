const routes = require('express').Router()

const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')

routes
    // users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    // projects
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)

module.exports = routes