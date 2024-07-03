// Load modules
const database = require('../database/database');

// Get task
const getTask = (id, callback) => {
    const sql = `SELECT * FROM Tasks WHERE Task_Id = ${id}`;
    database.appDatabase.get(sql, [], (error, row) => {
      if (error) {
        callback(error.message);
      }
      callback (row);
    });
  };
  
  // Delete task  
  const deleteTask = (id, callback) => {
    const sql = `DELETE FROM Tasks WHERE Task_Id = ${id}`;
    database.appDatabase.run(sql, [], (error, row) => {
      if (error) {
        callback(error.message);
      }
      const successMessage = "The task was successfully deleted."
      callback(successMessage);
    });
  };
  
  // Update task  
  const updateTask = (task, status, id, callback) => {
    let sql = `UPDATE Tasks SET Task = '${task}', Status = '${status}' WHERE (Task_ID = ${id})`;
    database.appDatabase.run(sql, [], (error, row) => {
      if (error) {
        callback(error.message);
      }
      const successMessage = "The task was successfully updated."
      callback(successMessage);
    });
  };
  
// Get all tasks from database
const getTasks = (callback) => {
  const sql = `SELECT * FROM Tasks`;
  database.appDatabase.all(sql, [], (error, rows) => {
    if (error) {
      console.error(error.message);
    }
    callback(rows);
  });
};


// Create new task
const createTask = (task, status, callback) => {
    const sql = `INSERT INTO Tasks (Task, Status) VALUES ('${task}', '${status}')`;
    database.appDatabase.run(sql, [], (error, row) => {
      if (error) {
        callback(error.message);
      }
      const successMessage = "The task was entered successfully."
      callback(successMessage);
    });
  };
// Export models
module.exports = {
    getTask,
    deleteTask,
    updateTask
};