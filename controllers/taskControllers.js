// Load modules
const taskModel = require('../models/taskModels');
const { validationResult } = require('express-validator');


// Create task page controllers
// GET
function task_create_get (request, response) {
  response.render('create', { errors: {} });
};
// POST
function task_create_post (request, response) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.render('create', { errors: errors.mapped() });
  }
  const task = request.body.Task;
  const status = 'In progress';
  taskModel.createTask(task, status, (result) => {
    console.log(result);
    response.redirect('/');
  });
};

// Update task page controllers
// GET
const task_update_get = (request, response) => {
  const id = request.params.id;
  taskModel.getTask(id, (result) => {
    response.render('update', { task: result, errors: {} });
  });
};
// POST
const task_update_post = (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.render('update', { task: request.body, errors: errors.mapped() });
  }
  const task = request.body.Task;
  const status = request.body.Status;
  const id = request.params.id;
  taskModel.updateTask(task, status, id, () => {
    response.redirect('/');
  });
};
// About page controller
const task_about = (request, response) => {
  response.render('about');
};
// Index page controller
function task_index (request, response) {
  taskModel.getTasks((queryResult) => {
    console.log(queryResult);
    response.render('index', { tasks: queryResult });
  });
};




// Create task page controllers
// GET
function task_create_get (request, response) {
  response.render('create');
};
// POST
function task_create_post (request, response) {
  const task = request.body.Task;
  const status = 'In progress';
  taskModel.createTask(task, status, (result) => {
    console.log(result);
    response.redirect('/');
  });
};



// Delete task page controllers
// GET
const task_delete_get = (request, response) => {
  const id = request.params.id;
  taskModel.getTask(id, (result) => {
    console.log(result);
    response.render('delete', { task: result });
  });
};
// POST
const task_delete_post = (request, response) => {
  const id = request.params.id;
  taskModel.deleteTask(id, () => {
    response.redirect('/');
  });
};

// Update task page controllers
// GET
// const task_update_get = (request, response) => {
//   const id = request.params.id;
//   taskModel.getTask(id, (result) => {
//     response.render('update', { task: result });
//   });
// };
// // POST
// const task_update_post = (request, response) => {
//   const task = request.body.Task;
//   const status = request.body.Status;
//   const id = request.params.id;
//   taskModel.updateTask(task, status, id, () => {
//     response.redirect('/');
//   });
// };

// Export controllers
module.exports = {
  task_delete_get,
  task_delete_post,
  task_update_get,
  task_update_post,
  task_create_get,
  task_create_post,
  task_about
};

