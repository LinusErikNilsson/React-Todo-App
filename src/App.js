import React, { useState, useRef, useEffect } from "react";
import Todo from "./components/todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import { render } from "@testing-library/react";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';





function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  
  
  function addTask(name) {
    
    const newTask = { id: nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(newTask);
    console.log(tasks);
    
  }
  
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }
 

  function toggleTaskCompleted(id) {
    
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks)
  }
  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        />
        )
        );
        
        const filterList = FILTER_NAMES.map(name => (
          <FilterButton
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={setFilter}
          />
          ));

          const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
          const headingText = `${taskList.length} ${tasksNoun} remaining`;

          let filteredArr = taskList.filter((object) => {
            if (object.Completed === true) return object.length;
          })       
        
          
          return (
            <div className="todoapp stack-large">
      <h1 className="mainheader">Todo List
        <PlaylistAddIcon fontSize="verylarge"></PlaylistAddIcon>
      </h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>

      <div className="todoliststack">

      <h3 className="header-list-counter" id="list-heading"> 
      
      {headingText} {console.log(taskList.length)}

      </h3>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        >
        {taskList}
      </ul>
    </div>



    </div>

    
  );
}

export default App;
