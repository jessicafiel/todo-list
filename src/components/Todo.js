import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';

function Todo({ todos, removeTodo}) {
    return todos.map((todo, index) => (
        <div className="text-list">
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className='icons'>
            <RemoveIcon className='delete-icon'/>
                {/* Removendo o item clicado 
                    <RemoveCircleOutlineIcon
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                */}
            </div>
            <hr
                style={{
                    color: 'gray',
                    backgroundColor: 'gray',
                    height: 1
            }}
            />
        </div>
    ));
};

export default Todo;