import './styles/index.scss';
import "react-toggle/style.css"
import Toggle from 'react-toggle';
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

const DARK_CLASS = "dark";

function App() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)"
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
    }
  )

  const [ isDark, setIsDark ] = useState(systemPrefersDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [isDark]);
  
  return (
    <>
      <h1 className="title">hello</h1>
      <Toggle
          className="DarkToggle"
          checked={isDark}
          onChange={event => setIsDark(event.target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode"
        />
    </>
  );
}

export default App;
