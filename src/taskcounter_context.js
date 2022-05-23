import * as React from 'react';

const TaskCounterContext = React.createContext()


function TaskCounter (prop) {
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    
    
    return (
        `${taskList.length} ${tasksNoun} remaining`
    )

           

}