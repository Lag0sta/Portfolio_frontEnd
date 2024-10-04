// import React, { useState, useEffect, useRef } from 'react';
// import { titleAnimation } from './titleAnimation';


// function TextGlitchAnimation({text, element}) {

//   const [displayText, setDisplayText] = useState(text);
//   const [rectangles, setRectangles] = useState([]);
//   const containerRef = useRef(null);

//   const elementName = element.split(" '' ").join('')

//   useEffect(() => {
//     const intervalId = setInterval(generateRectangles, 75);
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (typeof text === 'string') {
//       titleAnimation(text, setDisplayText);
//     } else {
//       console.error('text prop must be a string');
//     }  }, []);

//   const generateRectangles = () => {
//     const numRectangles = Math.floor(Math.random() * 6) + 7;
//     const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
//     const containerHeight = containerRef.current ? containerRef.current.offsetHeight : 0;

//     const rectangles = Array(numRectangles).fill().map(() => {
//       const width = Math.random() * 90 + containerWidth / 20 + (Math.random() < 0.3 ? Math.random() * 150 : 0);
//       const height = Math.random() * 30 + containerHeight / 20 + (Math.random() < 0.3 ? Math.random() * 50 : 0);
//       const left = Math.floor(Math.random() * (containerWidth - width));
//       const top = Math.floor(Math.random() * (containerHeight - height));
//       return { width, height, left, top };
//     });

//     setRectangles(rectangles);
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ position: 'relative', width: '50vh', height: '50vh', }}>
//         {rectangles.map((rectangle, index) => {
//           const newX = rectangle.left + (Math.random() - 0.5) * 0.01 * rectangle.width;
//           return (
//             <div style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               zIndex: 30,
//             }}>
//               <elementName style={{
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 fontSize: 48,
//                 color: 'black',
//                 zIndex: -1,
//               }}>
//                 {text}
//               </elementName>
//               <elementName
//                 key={index}
//                 style={{
//                   position: 'absolute',
//                   top: -40,
//                   left: 0.5,
//                   width: '100%',
//                   height: '100%',
//                   clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
//                   fontSize: 48,
//                   color: 'black',
//                   zIndex: 100000,
//                 }}
//               >
//                 {text}
//               </elementName>
//               <elementName
//                 key={index}
//                 style={{
//                   position: 'absolute',
//                   top: -40,
//                   left: -1,
//                   width: '100%',
//                   height: '100%',
//                   clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
//                   fontSize: 48,
//                   color: 'cyan',
//                   zIndex: 10,
//                 }}
//               >
//                 {text}
//               </elementName>
//               <elementName
//                 key={index}
//                 style={{
//                   position: 'absolute',
//                   top: -40,
//                   left: 2,
//                   width: '100%',
//                   height: '100%',
//                   clipPath: `inset(${rectangle.top}px ${containerRef.current.offsetWidth - newX - rectangle.width}px ${containerRef.current.offsetHeight - rectangle.top - rectangle.height}px ${newX}px)`,
//                   fontSize: 48,
//                   color: 'magenta',
//                   zIndex: 10,
//                 }}
//               >
//                 {text}
//               </elementName>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default TextGlitchAnimation;