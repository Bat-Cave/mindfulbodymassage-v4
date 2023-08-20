import { useState, useEffect } from "react";

function useScrollAmount(): number {
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollAmount(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollAmount;
}

export default useScrollAmount;
