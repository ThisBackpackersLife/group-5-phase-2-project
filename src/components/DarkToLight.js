import React, { useEffect } from "react";

function DarkToLight({ isDark, toggleDarkMode }) {
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div>
      <button onClick={handleClick}>{isDark ? "Light" : "Dark"}</button>
    </div>
  );
}

export default DarkToLight;