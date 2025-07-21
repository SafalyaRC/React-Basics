import { useEffect, useState } from "react"
import {TodoProvider} from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/Todoitem";

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


function App() {
  const [todos, setTodos] = useState([]); // Renamed from setTodods for convention

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }

  useEffect(() => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Could not parse todos from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {/* The main background with a subtle gradient */}
      <div className="bg-gradient-to-br from-slate-900 to-gray-800 min-h-screen py-8 font-sans">
        {/* The main content container with a glass-like effect */}
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl p-6 bg-black/30 backdrop-blur-lg border border-white/10">
            <h1 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-md">Manage Your Todos</h1>
            <p className="text-center text-slate-400 mb-8">Your personal task manager</p>
            <div className="mb-6">
                <TodoForm />
            </div>
            <div className="flex flex-col gap-y-3">
                {/* Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo} />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}
export default App