import React, { useState, useEffect, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Form(props) {
    const [input, setInput] = useState();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');

    };

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {(
                <>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {  width: '44ch',marginLeft: '-73px'},
                    }}
                    noValidate
                    autoComplete="off"
                    >
                <TextField id="filled-basic" label="Descrição" type="text" variant="filled"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef} 
                        />
                </Box>
                <AddIcon onClick={handleSubmit} style={{fill: "white"}} className="button-add" />   
                </>
            )}
        </form >
    )
}

export default Form;