import React from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = React.useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Введите значение..."
      />
      <button>Сохранить</button>
    </form>
  );
}

export default ToDoForm;
