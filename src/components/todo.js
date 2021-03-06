import React, { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const wasEditing = usePrevious(isEditing);

    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    onChange={handleChange}
                    ref={editFieldRef}
                />
            </div>
            <div className="btn-group">
                <Button
                    variant="contained"
                    color="warning"
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </Button>

            </div>
        </form>
    );

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>

            <div className="btn-group">
                <Button
                    variant="contained"
                    color="info"
                    type="button"
                    className="btn"
                    onClick={() => setEditing(true)}
                    ref={editButtonRef}
                >
                    Edit <span className="visually-hidden">{props.name}</span>
                </Button>

                <Button
                    variant="contained"
                    startIcon={<DeleteIcon/>}
                    color="error"
                    type="button"
                    className="btn btn_danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}
                    </span>
                </Button>
            </div>
        </div>
    );

    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        } if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}