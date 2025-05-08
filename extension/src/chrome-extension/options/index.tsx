import '../global.css';

import { ThemeProvider } from "./themeContext.tsx";
import ThemeToggle from "./themeToggle.tsx";

const Options = () => {
    return (
        <ThemeProvider>
        <div className="min-h-screen w-full text-5xl p-10 font-extrabold" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>

            <div>This is your options page.</div>
            <ThemeToggle />
        </div>
        </ThemeProvider>
    );
};

export default Options;
