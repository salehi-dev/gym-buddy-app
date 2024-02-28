import { useEffect, useRef, useState } from "react";

export function useCountDown(idx: number, initialCount: number) {
  const [countDown, setCountDown] = useState(initialCount);
  const intervalRef = useRef<number>();
  useEffect(() => {
    if (idx == -1) {
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setCountDown((count) => {
        console.log(count);
        return count - 1;
      });
    }, 150);
    return cleanup;
  }, [idx]);
  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);
  useEffect(() => {
    if (countDown === 0) {
      cleanup();
    }
  }, [countDown]);
  const cleanup = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };
  return countDown;
}
