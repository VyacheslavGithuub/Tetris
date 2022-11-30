import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<null | (() => void)>(null);
  //Запомните последний обратный вызов.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //Установить интервал.
  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
