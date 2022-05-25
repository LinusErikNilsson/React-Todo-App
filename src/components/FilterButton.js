import React from "react";
import Button from "@mui/material/Button";


function FilterButton(props) {
    return (
        <Button
            variant="contained"
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
        >
            <span className="visually-hidden">Show </span>
            <span> {props.name}</span>
            <span className="visually-hidden"> tasks</span>

        </Button>

    );
}

export default FilterButton;