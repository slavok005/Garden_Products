import React, { useContext, useEffect, useState } from 'react'

import { ThemeContext } from '../../ThemeContext';

const data = [
    {
    }
];


const Todos = () => {
    const {theme} = useContext(ThemeContext)

    const [todos, setTodos] = useState([]);

    const [filteredTodos, setFilteredTodos] = useState([]);

    const [note, setNote] = useState("");

    const [todoSearch, setTodoSearch] = useState("");

    useEffect(() => {
        setTodos(data);
    }, []);

   
    const handleCreateTodo = () => {
        if(note.length === 0){
            return;
        }

     

        setTodos([...todos, todo]);
        setNote("");
    }

  

   

    useEffect(() => {
        if(todoSearch.length > 0){
            setFilteredTodos(todos.filter(todo => todo.tags.filter(tag => tag.name.toLowerCase().indexOf(todoSearch.toLowerCase()) !== -1).length > 0))
        }else {
            setFilteredTodos([])
        }
    }, [todoSearch])



    const todosData = (filteredTodos.length > 0 && todoSearch.length > 0) || todoSearch.length > 0 ? filteredTodos : todos;

  return (
    <main className={`main ${theme === "dark" ? "bg-dark" : ""}`}>
         foto
    </main>
  
  )
}

export default Todos