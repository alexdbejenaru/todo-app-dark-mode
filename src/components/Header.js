// import Toggle from 'react-toggle';
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DARK_CLASS = "dark";

const Header = () => {
    const systemPrefersDark = useMediaQuery(
        {
          query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
          setIsDark(prefersDark);
        }
      )

      const [ isDark, setIsDark ] = useState(systemPrefersDark ? 'dark' : 'light');
      
      function getDefaultMode() {
        const savedMode = localStorage.getItem('mode');
        return savedMode ? savedMode : isDark;
      }

      const [ mode, setMode ] = useState(getDefaultMode());


    useEffect(() => {
      if (mode === 'dark') {
        document.documentElement.classList.add(DARK_CLASS)
      } else {
        document.documentElement.classList.remove(DARK_CLASS)
      }
      localStorage.setItem('mode', mode);
    }, [mode]);

    return ( 
        <>
          <section className={ mode === 'dark' ? "header-container bgDark" : "header-container"}>
              <h1 className="title">TO DO</h1>
              
              <button className="DarkToggle" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{mode === 'dark' ? <MdOutlineLightMode className="mode-icons"/> : <MdDarkMode className="mode-icons"/>}</button>
          </section>
        </>
     );
}
 
export default Header;