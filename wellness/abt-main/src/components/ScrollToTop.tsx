import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element (anchor behavior).
    // Otherwise, scroll to top.
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;