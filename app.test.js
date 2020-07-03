
const newTask = require('./app');
test("return new task", ()=>{
    expect(newTask(e)).toBe(e.preventDefault());
})

test("remove a task", ()=>{
    expect(removeTask(e)).toBe(e.target.classList.contains('remove-task') {
        e.target.parentElement.remove()});
});

test("getting tasks from storage", ()=>{
    let tasks;
  const tasksLS = localStorage.getItem('tasks');
    expect(getTaskFromStorage).toBe(tasks = JSON.parse(tasksLS))
})

test("look through all tasks and delete", ()=>{
    expect(tasksLS, index).toBe(tasks.splice(index, 1));
});


