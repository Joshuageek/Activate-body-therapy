import { useEffect, useState, useRef } from 'react';
import { Users, Award, Heart } from 'lucide-react';

interface CounterProps {
  number: string;
  label: string;
  icon: React.ElementType;
}

const Counter = ({ number, label, icon: Icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const target = parseInt(number) || 0;
  const isPercentage = number.includes('%');
  const duration = 2000; // Animation duration in ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <span className="text-4xl font-bold text-foreground block mb-2">
        {isPercentage ? `${count}%` : `${count}+`}
      </span>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Counter;
