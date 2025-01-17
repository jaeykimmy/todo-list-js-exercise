// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litterbox");
const task2 = newTask("Do Laundry", "I don't wanna");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed

task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

//console.log(tasks);
task2.logState();

task2.title;
task2.markCompleted();
task2.logState();
