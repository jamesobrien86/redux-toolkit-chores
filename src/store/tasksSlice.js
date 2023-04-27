// define tasks slice
import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';


// define the task object 
export const createTask = (title) => ({
    id: nanoid(),
    title,
    completed: false,
    assignedTo: ' '
})

// define initialState for tasks
export const initialState = [
    createTask("learn redux"),
    createTask('Learn redux toolkit')
];

// define slice
export const tasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createTask(action.payload))
        },
        toggle: (state, action) => {
            // get task
            const task = state.find(task => task.id === action.payload.taskId);
            task.completed = action.payload.completed;

        },
        assignToUser: (state, action) => {
            const task = state.find((task) => task.id === action.payload.taskId);
            task.assignedTo = action.payload.humanId;
        }
    }
})

export const toggleTask = createAction("Tasks/toggle", (taskId, completed) => ({
    payload: {
        taskId, completed
    }
}))