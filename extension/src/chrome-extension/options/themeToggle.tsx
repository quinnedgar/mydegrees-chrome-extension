
import React from 'react'
import {useTheme} from './themeContext'

const ThemeToggle: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className="modeChange-wrapper">
        <label>
            Dark Mode:
            <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            />
        </label>
        </div>
    );
}

export default ThemeToggle;
