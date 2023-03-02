import { useState, useEffect } from 'react';
import Button from '../Button';
import { BackspaceIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { playSound } from '../../playSound';
import { clickSound } from '../../assets';

const QuickNote = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState('');
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  {
    /* Form and Submit Handle Function */
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + Math.random(),
          text: todo.trim(),
          completed: false,
        },
      ]);
    }

    setTodo('');
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  };

  const handleCompleteClick = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !todo.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="card dark:cardDark cardTheme flex  h-full  w-full flex-col  rounded-xl py-8 px-4  shadow-lg">
      <h1 className="mb-4 text-center font-jetMono text-2xl font-bold uppercase">
        Quick Note
      </h1>

      <form action="" className="mb-4 w-full ">
        <input
          value={todo}
          onChange={handleInputChange}
          type="text"
          placeholder="enter your task"
          className="mb-4 h-8 w-full rounded-xl p-6  shadow-xl dark:bg-neutral-800"
        />
        <Button
          typeBtn={'submit'}
          classStyle={'w-full font-notoLaos '}
          text={'Add Task'}
          onClickFunction={handleFormSubmit}
        />
      </form>

      <ul className="scrollBarTheme flex  w-full flex-col overflow-y-auto">
        {todos.map((todo) => (
          <li
            className={`mb-2 flex w-full items-center justify-between rounded-lg p-2 font-notoLaos text-base font-semibold text-black shadow-md dark:text-white`}
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? '0.5' : '1',
            }}
          >
            <div className="flex items-center justify-center">
              <CheckCircleIcon
                className="mr-2 h-8 w-8 cursor-pointer"
                onClick={() => {
                  handleCompleteClick(todo);
                  playSound(clickSound);
                }}
              />
              {todo.text}
            </div>
            <div className="flex items-center justify-center">
              <BackspaceIcon
                className=" h-8 w-8 cursor-pointer"
                onClick={() => handleDeleteClick(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickNote;
