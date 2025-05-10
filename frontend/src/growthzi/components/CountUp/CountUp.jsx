import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const end = target;
      const increment = end / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      setHasAnimated(true);
    }
  }, [inView, hasAnimated, target, duration]);

  return (
    <div ref={ref}>
      <h2>{count.toLocaleString()}{suffix}</h2>
    </div>
  );
};

export default CountUp;
