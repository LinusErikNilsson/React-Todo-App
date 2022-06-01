import React from "react";
import { ThemeContext } from './context/themeContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function BaseTheme(props) {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const theme1 = createTheme(
    {
      palette: { mode: theme }
    }
  );

  console.log('Current Theme - ' + JSON.stringify(theme));
  return (
    <div>
      <ThemeProvider theme={theme1}>
        {props.children}
      </ThemeProvider>
    </div>
  );

}
