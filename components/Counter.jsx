"use client"
import { useEffect, useRef } from 'react';

const Counter = ({ start, end, duration }) => {
  const nodeRef = useRef(null);

  const animateCount = () => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.floor(((end - start) * progress) / duration);
      if (progress < duration) {
        nodeRef.current.innerText = start + increment;
        requestAnimationFrame(step);
      } else {
        nodeRef.current.innerText = end;
      }
    };
    requestAnimationFrame(step);
  };

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as per your need
    });

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <span ref={nodeRef}>{start}</span>;
};

const CounterNumber = () => {
  return (
    <div className="main-widget-wrap-container">
      <div className='elementor-widget-wrap'>
        <div className='elementor-container'>
          <div className='elementor-counter'>
            <span className='elementor-counter-number' >
            <Counter start={0} end={200} duration={2000} />
            </span>
            <span className='elementor-counter-number-suffix'>+</span>
            <div className='elementor-counter-title'>Happy Clients</div>
          </div>
          <div className='elementor-counter'>
          <span className='elementor-counter-number' >
            <Counter start={0} end={100} duration={1500}  />
            </span>
            <span className='elementor-counter-number-suffix'>+</span>
            <div className='elementor-counter-title'>Companies</div>
          </div>
          <div className='elementor-counter'>
          <span className='elementor-counter-number' >
            <Counter start={0} end={500} duration={2500}  />
            </span>
            <span className='elementor-counter-number-suffix'>+</span>
            <div className='elementor-counter-title'>Projects Done</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterNumber;




