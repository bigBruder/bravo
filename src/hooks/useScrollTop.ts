import { useState, useRef, useLayoutEffect } from "react";

export default function useScrollBarPosition() {
  const [top, setTop] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    function getTopPosition() {
      const topPosition = ref?.current?.scrollTop ?? 0;
      setTop(topPosition);
    }
    ref?.current?.addEventListener("scroll", getTopPosition);
    getTopPosition();
    return () => ref?.current?.removeEventListener("scroll", getTopPosition);
  }, []);

  return { ref, top };
}
