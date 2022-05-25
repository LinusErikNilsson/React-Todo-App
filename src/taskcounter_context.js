import * as React from 'react';
import taskList from './App';

/*

const TaskCounterContext = React.createContext()

function TaskCounterProvider({ children }) {
    const [displayState, setDisplayState] = React.useState({
        ...initalState,
    });

    return (
        <TaskCounterContext.Provider value={{displayState, setDisplayState}}>
            {children}
        </TaskCounterContext.Provider>
    )

}

function displayState() {
    const context = React.useContext(DisplayStateContext);
    if (context === undefined) {
        throw new Error(
            'TaskcounterContext must be used within a DisplayProvider'
        );
    }
    return context.displayState;
}

function setDisplayState() {
    const context = React.useContext(DisplayStateContext);
    if (context === undefined) {
        throw new Error(
            'DisplayStateContext must be used within a DisplayProvider'
        );
    }
return context.setDisplayState;
}

function useDisplayState() {
    return [displayState(), setDisplayState()];
}
export { TaskCounterProvider, useDisplayState};

*/

function TestTaskListCounter() {

    const taskspeller = taskList.length !== 1 ? ' tasks' : 'task';
    const countertext = 'on the Selection'

    
    return (
        taskList.length + taskspeller + countertext
    )
}



function TaskCounter () {
    //const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';

    return (
        taskList.length
        
     //`${taskList.length} ${tasksNoun} remaining`
     
               
    );

}

export default TaskCounter;

