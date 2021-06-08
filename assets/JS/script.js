var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;



  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };
  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);

    // check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);

/*
//will run
if (true) {
  console.log("is true true?");
}

//won't run
if (false) {
  console.log('is false true?');
}

//will run
if (3 === 10 || "a" === "a") {
console.log("does 3 equal 10?");
console.log("does the letter 'a' equal the letter 'a'?");
}

//won't run
if (3 === 10 && "a" === "a") {
  console.log("does 3 equal 10");
  console.log("does 'a' equal 'a'?")
}
*/