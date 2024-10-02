import React, { useState, useEffect, useRef } from 'react';


function Glitch() {

  const [rectangles, setRectangles] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const intervalId = setInterval(generateRectangles, 75);
    return () => clearInterval(intervalId);
  }, []);
  
  const generateRectangles = () => {
    const numRectangles = Math.floor(Math.random() * 6) + 7;
    const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
    const containerHeight = containerRef.current ? containerRef.current.offsetHeight : 0;
  
    const rectangles = Array(numRectangles).fill().map(() => {   
      const width = Math.random() * 90 + containerWidth / 20 + (Math.random() < 0.3 ? Math.random() * 150 : 0);
      const height = Math.random() * 30 + containerHeight / 20 + (Math.random() < 0.3 ? Math.random() * 50 : 0);
      const left = Math.floor(Math.random() * (containerWidth - width));
      const top = Math.floor(Math.random() * (containerHeight - height));
      return { width, height, left, top };
    });
  
    setRectangles(rectangles);
  };
 


  return (
    <div>
      <div ref={containerRef} style={{ position: 'relative', width: '50vh', height: '50vh', }}>
        {rectangles.map((rectangle, index) => {
          const newX = rectangle.left + (Math.random() - 0.5) * 0.01 * rectangle.width;
          return (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 30,
            }}>
              <img
                key={index}
                src="/assets/img/portrait_color.png"
                alt="Glitch Image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  zIndex: 30,
                  opacity: 0.9,
                  borderRadius: '50%',
                  mask: 'linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))blur(1px)', // add a gradient mask
                }}
              />
              <img
                key={index}
                src="/assets/img/portrait_color_B.png"
                alt="Glitch Image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: -1.5,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  zIndex: 29,
                  opacity: 0.8,
                  borderRadius: '50%',

                  mask: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))', // add a gradient mask
                }}
              />
              <img
                key={index}
                src="/assets/img/portrait_color_R.png"
                alt="Glitch Image"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 1.5,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  zIndex: 29,
                  opacity: 0.8,
                  borderRadius: '50%',


                  mask: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))', // add a gradient mask
                }}
              />
            </div>
          );
        })}
      </div>

    </div>


  );
}


export default Glitch;