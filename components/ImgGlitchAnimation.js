import React, {
  useState,
  useRef,
  useLayoutEffect
} from 'react';

import styles from '../styles/ImgGlitchAnimation.module.css'

function ImgGlitchAnimation() {

  const [rectangles, setRectangles] = useState([]);
  const containerRef = useRef(null);

  const intervalMS = 75;
  const containerWidthRatio = 20;
  const containerHeightRatio = 20;
  const rectangleCountMin = 7;
  const rectangleCountMax = 13;

  useLayoutEffect(() => {


    if (containerRef.current) {
      //Permet de générer les rectangles à interval régulier
      const intervalId = setInterval(generateRectanglesArr, intervalMS);
      return () => clearInterval(intervalId);

      //Permet de générer des dimensions width & height aléatoires
      function generateRectangleDimensions() {
        const width = Math.random() * 90 + containerRef.current.offsetWidth / containerWidthRatio;
        const height = Math.random() * 30 + containerRef.current.offsetHeight / containerHeightRatio;
        return { width, height };
      };

      //Permet de générer des positions X & Y aléatoires pour les rectangles
      function generateRectanglePosition(rectangle) {
        const left = Math.floor(Math.random() * (containerRef.current.offsetWidth - rectangle.width));
        const top = Math.floor(Math.random() * (containerRef.current.offsetHeight - rectangle.height));
        return { left, top };
      };

      //Permet de générer [rectangles + positionsRectangles + dimensionsRectangles] de manière aléatoire
      function generateRectanglesArr() {
        const numRectangles = Math.floor(Math.random() * (rectangleCountMax - rectangleCountMin + 1)) + rectangleCountMin;
        const rectangles = Array(numRectangles).fill().map(() => {
          const dimensions = generateRectangleDimensions();
          const position = generateRectanglePosition(dimensions);
          return { ...dimensions, ...position };
        });
        setRectangles(rectangles);
      };



    }

  }, []);







  return (
    <div>
      <div ref={containerRef} className="relative portrait:xs:w-56 portrait:xs:h-56 portrait:lg:w-64 portrait:lg:h-64 landscape:xs:w-32 landscape:lg:w-64 landscape:xs:h-32  landscape:lg:h-64">
        {rectangles.map((rectangle, index) => (
          <div key={index} className="absolute top-0 left-0 w-full h-full z-2 rounded-full">
            <img className={`${styles.img} ${styles.imgGlitch}`}
              style={{ clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - rectangle.left - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${rectangle.left}px)` }}
              src="/assets/img/portrait_color.png"
              alt="Main Glitch"

            />
            <img className={`${styles.img} ${styles.imgGlitchB}`}
              style={{ clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - rectangle.left - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${rectangle.left}px)` }}
              src="/assets/img/portrait_color_B.png"
              alt="Blue Glitch"

            />
            <img className={`${styles.img} ${styles.imgGlitchR}`}
              style={{ clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - rectangle.left - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${rectangle.left}px)` }}
              src="/assets/img/portrait_color_R.png"
              alt="Red Glitch"
            />
          </div>
        ))}
        <img className={`${styles.img} ${styles.portrait}`}
          src="/assets/img/portrait_color_NB.png"
          alt="Portrait Grey"
        />
        <img className={`${styles.img} ${styles.portraitR}`}
          src="/assets/img/portrait_color_R.png"
          alt="Portrait Red"
        />
        <img className={`${styles.img} ${styles.portraitB}`}
          src="/assets/img/portrait_color_B.png"
          alt="Portrait Blue"
        />
      </div>
    </div>
  );
}


export default ImgGlitchAnimation;