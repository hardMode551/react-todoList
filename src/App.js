import React from 'react'
import ToDo from './Components/ToDo';
import ToDoForm from './Components/ToDoForm';
import './index.scss';

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
    ])
  }
  

  return (
    <div className="App">
      <header>
        <h1>Количество задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>

      {todos.map((todo) => {
        return(
          <ToDo todo={todo} key={todo.id} toggleTask={handleToggle} deleteTask={deleteTask}/>
        )
      })}
    </div>
  );
}

export default App;
