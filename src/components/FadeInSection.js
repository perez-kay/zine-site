// obtained from here: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4

import { useState, useRef, useEffect } from 'react';

function FadeInSection(props, showOnce = true) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    const cleanUp = domRef.current;
    return () => observer.unobserve(cleanUp);
  }, [showOnce]);
  return (
    <div
      className={`fadeInSection ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
