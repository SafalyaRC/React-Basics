import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);

const SaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
        <polyline points="17 21 17 13 7 13 7 21"></polyline>
        <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
);

const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }

    return (
        <div
            className={`flex items-center border rounded-lg px-4 py-2.5 gap-x-4 shadow-sm duration-300 transition-all
                ${todo.completed 
                    ? "bg-green-600/10 border-green-500/30" 
                    : "bg-purple-900/20 border-purple-500/30"
                }`
            }
        >
            <input
                type="checkbox"
                className="cursor-pointer h-5 w-5 rounded accent-green-500 bg-transparent"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border-none outline-none w-full bg-transparent rounded-lg text-lg
                    ${isTodoEditable ? "ring-1 ring-white/30 px-2" : "ring-transparent"}
                    ${todo.completed ? "line-through text-slate-400" : "text-white"}`
                }
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Action Buttons */}
            <div className="flex gap-x-2 ml-auto">
                 <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-slate-700/80 hover:bg-slate-600 text-slate-300 hover:text-white shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    onClick={() => {
                        if (todo.completed) return;
                        if (isTodoEditable) {
                            editTodo();
                        } else {
                            setIsTodoEditable((prev) => !prev);
                        }
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? <SaveIcon /> : <EditIcon />}
                </button>
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-red-600/80 hover:bg-red-700 text-red-100 hover:text-white shrink-0 transition-colors"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
}
export default TodoItem;
