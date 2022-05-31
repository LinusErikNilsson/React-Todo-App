import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


function FilterButton(props) {
    return (

        <Stack spacing={2} direction="row">
        
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
        </Stack>

    );
}

export default FilterButton;