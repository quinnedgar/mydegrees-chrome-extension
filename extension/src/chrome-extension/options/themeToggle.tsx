
import React from 'react'
import {useTheme} from './themeContext'
import '../options/options.css'

const ThemeToggle: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className="modeChange-wrapper">
        <label className='dark-mode'>
            Dark Mode:
            <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            />
        </label>
        <label className='idk'>
            IDK YET:
            <input
            type='checkbox'
            />
        </label>

        </div>
    );
}

export default ThemeToggle;
