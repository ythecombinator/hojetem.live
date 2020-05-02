import {useEffect, useRef} from 'react';

type Callback = () => void;

export const useTimeout = (callback: Callback, delay: number) => {
  const savedCallback = useRef<Callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      (savedCallback.current as Callback)();
    }

    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearInterval(id);
    }

    return () => {};
  }, [delay]);
};
