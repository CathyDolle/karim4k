import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLenis } from "@studio-freight/react-lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;