import { ThemeContext } from "@emotion/react";
import React from "react";
import { themeContext } from "./context/themeContext";

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("light")
    const value = { theme, setTheme };

    return (
        <ThemeContext.Provider value={value} >
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
}