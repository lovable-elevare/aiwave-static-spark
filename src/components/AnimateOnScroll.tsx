
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'blur-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add('visible');
              }
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${animation} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
