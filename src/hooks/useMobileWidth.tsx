import { useEffect, useState } from 'react';

export const useMobileWidth = (width: number) => {
  const [isValid, setIsValid] = useState(() => window.innerWidth < width);

  useEffect(() => {
    const handleResizing = () => {
      if (window.innerWidth < width) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    window.addEventListener('resize', handleResizing);

    return () => {
      window.removeEventListener('resize', handleResizing);
    };
  }, [width]);

  return isValid;
};
