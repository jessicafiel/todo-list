import React from 'react';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

function Todo({ todos, removeTodo}) {
    return todos.map((todo, index) => (
        <div className="text-list">
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className='icons'>
            <DoDisturbOnIcon className='delete-icon'/>
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
                    height: 1,
                    width: '23em',
                    marginTop: '-1em'
            }}
            />
        </div>
    ));
};

export default Todo;