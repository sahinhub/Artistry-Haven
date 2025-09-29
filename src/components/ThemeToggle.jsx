import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { MdSunny } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';

const ThemeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext);

  useEffect(() => {
    // Save theme
    localStorage.setItem('isDark', JSON.stringify(dark));

   if (dark) {
  document.documentElement.classList.add('dark');        // Tailwind dark:
  document.documentElement.setAttribute('data-theme','dark'); // DaisyUI theme
} else {
  document.documentElement.classList.remove('dark');
  document.documentElement.setAttribute('data-theme','light');
}

  }, [dark]);

  return (
    <div>
      <label className="toggle text-3xl">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
          className=""
        />

        {/* Sun Icon */}
        <MdSunny aria-level='sun'></MdSunny>
        {/* Moon Icon */}
        <IoIosMoon aria-label="moon" ></IoIosMoon>
      </label>
    </div>
  );
};

export default ThemeToggle;
