document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', submitHandler)
});

function submitHandler(event) {
  event.preventDefault()
  let taskDescription = event.target.description.value 
  let taskDuration = event.target.duration.value
  let taskPriority = event.target.querySelector('select').value
  addTask(taskDescription, taskDuration, taskPriority)
}

function addTask(description, duration, priority) {
  let li = document.createElement('li')
  li.textContent = `${description} - ${duration}`
  if (priority === "low") {
    li.style.color = "green"
  } else if (priority === "medium") {
    li.style.color = "yellow"
  } else {
    li.style.color = "red"
  }

  let button = document.createElement('button')
  button.textContent = "X"
  button["data-description"] = description
  button.addEventListener('click', deleteTask)

  let ul = document.querySelector('ul')
  li.appendChild(button)
  ul.appendChild(li)

  document.querySelector('#create-task-form').reset()
}

function deleteTask(event) {
  event.preventDefault()
  event.target.parentElement.remove()
}

