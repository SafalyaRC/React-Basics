import React from 'react'
import { useState } from 'react';
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

function TodoForm() {
    const [todo, setTodo] = useState(""); // Changed initial state from null to ""
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo: todo, completed: false });
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex gap-2">
            <input
                type="text"
                placeholder="Write your next task..."
                className="w-full border border-white/20 rounded-lg px-4 py-2.5 bg-transparent text-white placeholder:text-slate-400 outline-none duration-200 transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-6 py-2.5 bg-purple-600 text-white font-semibold shrink-0 hover:bg-purple-700 active:bg-purple-800 transition-all duration-200 shadow-lg hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


