// Load modules
const express = require('express');

//  Create route handler

const taskController = require('../controllers/taskControllers');

const router = express.Router();
// Respond when a GET request is made to the index page
router.get('/', (request, response) => {
  response.render('index');
});

// GET About Page
router.get('/about', taskController.task_about);
// GET/POST Create page
router.get('/task/create', taskController.task_create_get);
router.post('/task/create', taskController.task_create_post);
// GET/POST Delete Page
router.get('/task/delete/:id', taskController.task_delete_get);
router.post('/task/delete/:id', taskController.task_delete_post);
// GET/POST Update Page
router.get('/task/update/:id', taskController.task_update_get);
router.post('/task/update/:id', taskController.task_update_post)

const taskValidator = require('../validation/taskValidator');

router.post('/task/create', taskValidator.validateTask, taskController.task_create_post);
router.post('/task/update/:id', taskValidator.validateTask, taskController.task_update_post)
// Export router
module.exports = router;