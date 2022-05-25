import React, { useState } from "react";
import App from "../App";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


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
            <input
                type="text"
                id="new-todo-input"
                className="input input_lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            

            <Button variant="contained"
             type="submit" className="btn btn_primary btn_lg">
                Add
            </Button>
            
        </form>
    );
}

export default Form;