import { useEffect, useRef, useState } from "react";

function ClickOutsideToggle() {
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

export default ClickOutsideToggle;
