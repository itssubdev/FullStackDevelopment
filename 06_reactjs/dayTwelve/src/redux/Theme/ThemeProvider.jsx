import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
    // Correct way to select the mode
    const mode = useSelector((state) => state.theme.mode);

    useEffect(() => {
        const html = document.documentElement;
        if (mode === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [mode]);

    return children;
};

export default ThemeProvider;