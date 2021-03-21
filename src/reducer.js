import {todoList} from './config';

export const reducer = (state, action) =>{
    const {type,value,elType,index} = action;
    let oldState = JSON.parse(JSON.stringify({...state}))
    switch (type) {
        case 'addTodo':
        return {
            ...oldState,
            todo: [...oldState.todo,value]
        };
        case 'delete':
        oldState['delete'].push(value)
        oldState[elType].splice(index,1)
        return oldState;
        case 'toDoing':
        oldState['doing'].push(value)
        oldState['todo'].splice(index,1)
        return oldState;
        case 'toDone':
        oldState['done'].push(value)
        oldState['doing'].splice(index,1)
        return oldState;
        default:
        return todoList
    }
}