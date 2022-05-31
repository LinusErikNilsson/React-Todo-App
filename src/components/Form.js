import React, { useState } from "react";
import App from "../App";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label_lg">
                    What needs to be done?
                </label>
            </h2>

            <div className="mid-div">


            <Box
                component="text"
                id="new-todo-input"
                className="input input_lg"
                name="text"
                sx={{
                    '& > :not(style' : {m: 1, witdth: '25ch'},
                }}
                noValidate
                autoComplete="off"
                value={name}
                onChange={handleChange}
                >
                    
                <TextField id="outlined-basic" label="New task:" variant="outlined" size="Large" />
            </Box>

                <Button variant="contained"
                color="success"
                type="submit" className="addbutton">
                Add
                </Button>
            </div>

        

            
        </form>
    );
}

export default Form;