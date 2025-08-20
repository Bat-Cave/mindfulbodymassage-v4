import { type RefObject, useEffect, useRef, useState } from "react";

interface AutoPlayOptions {
  interval?: number;
  pauseOnHover?: boolean;
}

const useAutoPlay = (
  callback: () => void,
  options?: AutoPlayOptions
): [RefObject<HTMLDivElement>, { isPlaying: boolean; isPaused: boolean }] => {
  if (!callback) {
    throw new Error("Missing callback for useAutoPlay");
  }
  const { interval = 1000, pauseOnHover = true } = options ?? {};
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const returnRef = useRef<HTMLDivElement>(null);
  const autoPlayInterval = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  useEffect(() => {
    const returnedRef = returnRef.current;

    autoPlayInterval.current = setInterval(() => {
      callback();
    }, interval);
    setIsPlaying(true);
    setIsPaused(false);

    const handleMouseOver = () => {
      clearInterval(autoPlayInterval.current);
      setIsPlaying(false);
      setIsPaused(true);
    };

    const handleMouseOut = () => {
      autoPlayInterval.current = setInterval(() => {
        callback();
      }, interval);
      setIsPlaying(true);
      setIsPaused(false);
    };

    if (pauseOnHover) {
      returnedRef?.addEventListener("mouseover", handleMouseOver);
      returnedRef?.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      clearInterval(autoPlayInterval.current);
      returnedRef?.removeEventListener("mouseover", handleMouseOver);
      returnedRef?.removeEventListener("mouseout", handleMouseOut);
      setIsPlaying(false);
      setIsPaused(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returnRef]);

  // @ts-ignore
  return [returnRef, { isPlaying, isPaused }];

};

export default useAutoPlay;
