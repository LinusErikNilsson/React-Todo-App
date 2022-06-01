import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/core/SwitchUnstyled';
import { Tooltip } from '@mui/material';
import { ThemeContext } from '../context/themeContext';

function MUISwitch(props) {
    const { theme, setTheme }= React.useContext(ThemeContext)
    const {getInputProps, checked, disabled, focusVisible} = useSwitch(props);
    const stateClasses = {
        checked,
        disabled,
        focusVisible,
    };
    var mode = {

    
};

React.useEffect(() => {
    const mode = stateClasses.checked ? 'dark' : 'light'
    setTheme(mode)
}, [stateClasses])

return (
    <Tooltip title="Theme switcher">
        <SwitchRoot className={clsx(stateClasses)}>
            <SwitchTrack>
                <SwitchThumb className={clsx(stateClasses)} />
            </SwitchTrack>
            <SwitchInput {...getInputProps()} aria-label="Demo switch" />
        </SwitchRoot>
    </Tooltip>
);
}



export default function UseSwitchesCustom() {
    return <MUISwitch defaultChecked />
}