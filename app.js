// Load modules
const express = require('express');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes')
// Create express application
const app = express();

// Listen on port 8080 for connections
app.listen(8080, () => {
  console.log('Server started and listening at http://localhost:8080');
});

// Respond when a GET request is made to the index page
app.get('/', (request, response) => {
  response.send('To Do Application');
});




// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Application routes
app.use(taskRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// To recognize the incoming request object as strings or arrays
app.use (express.urlencoded ({extended: true}));