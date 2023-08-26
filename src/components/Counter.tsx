import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const fontSize = 30;
const padding = 5;
const height = fontSize + padding;

export default function Counter({ value }: { value: number }) {
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-1 overflow-hidden rounded bg-white px-2 leading-none"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const isZero = value / place < 1;

  return (
    <motion.div
      layout
      style={{ height }}
      className={twMerge(
        "relative w-[1ch] tabular-nums transition-colors",
        isZero && "text-black/40"
      )}
    >
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </motion.div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
