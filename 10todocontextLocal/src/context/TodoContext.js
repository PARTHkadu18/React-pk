import { createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            td: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updatedTodo: (id, todo)=>{},
    deletedTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider