import React, { useState, useEffect, useRef } from 'react';


function TextGlitchAnimation() {

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

  // const elementType = elementType1 || elementType2 || elementType3;


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
              <h2 style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                fontSize: 48, // add a font size to make the text visible
                color: 'black', // add a text color to make the text visible
                zIndex: -1,
              }}
              >
                Glitchy Text
              </h2>
              <h2
                key={index}
                style={{
                  position: 'absolute',
                  top: -40,
                  left: 0.5,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  fontSize: 48, // add a font size to make the text visible
                  color: 'black', // add a text color to make the text visible
                  zIndex: 100000,
                }}
              >
                Glitchy Text
              </h2>
              <h2
                key={index}
                style={{
                  position: 'absolute',
                  top: -40,
                  left: -1.,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  fontSize: 48, // add a font size to make the text visible
                  color: 'cyan', // add a text color to make the text visible
                  zIndex: 10,
                }}
              >
                Glitchy Text
              </h2>
              <h2
                key={index}
                style={{
                  position: 'absolute',
                  top: -40,
                  left: 2,
                  width: '100%',
                  height: '100%',
                  clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
                  fontSize: 48, // add a font size to make the text visible
                  color: 'magenta', // add a text color to make the text visible
                  zIndex: 10,
                }}
              >
                Glitchy Text
              </h2>
            </div>
          );
        })}
      </div>

    </div>


  );
}


export default TextGlitchAnimation;