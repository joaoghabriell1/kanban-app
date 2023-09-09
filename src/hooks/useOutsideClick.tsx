import { useEffect } from "react";
import { useRef } from "react";

interface Props {
  callback: () => void;
}

const useOutsideClick = ({ callback }: Props) => {
  const ref = useRef<HTMLElement & HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      console.log(event);
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
