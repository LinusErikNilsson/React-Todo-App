import * as React from 'react';
import taskList from './App';

const TaskCounterContext = React.createContext()


function TaskCounter () {
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    
    
    return (
        `${taskList.length} ${tasksNoun} remaining`
               
    );

           

}

export default TaskCounter;