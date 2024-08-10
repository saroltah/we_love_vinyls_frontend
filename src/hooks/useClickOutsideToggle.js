import { useEffect, useRef, useState } from "react";

/*
  Click outside of the menu toggle
  Menu closes
*/
function useClickOutsideToggle() {
  const [fullMenu, setFullMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFullMenu(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
  return {
    fullMenu,
    setFullMenu,
    ref,
  };
}

export default useClickOutsideToggle;
