import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return (
          <div className='card m-2' key={todo.id} style={{ width: '400px' }}>
            <div className='card-body'>
              <h5 className='mb-3'>{todo.content}</h5>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='btn btn-danger btn-sm'
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
