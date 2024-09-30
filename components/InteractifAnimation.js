import styles from '../styles/Home.module.css';
import { memo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function InteractifAnimation() {
  let particlesLoaded;
  const particlesInit = async (engine) => {
    console.log(engine);

 
    
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);

    engine.load('tsparticles',{
    
    
      
      interactivity: {
        events: {
          onhover: {
            enable: true, // enable hover effect
            mode: 'repulse' // hover effect mode (repulse, attract, etc.)
          }
        },
        modes: {
          repulse: {
            distance: 200, // adjust this value to control the distance at which particles are connected
            duration: 0.4 
          }
        }
      }
    })
  };

  return (
    <div>
       <div className="App">
      <Particles 
       id="particles-here" 
       loaded={particlesLoaded}
       init={particlesInit} 
       style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        
      }}
       options={{
        'fullScreen':{
          'enable': false
        },
      
        "particles": {
            "number": {
                "value": 103,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.15,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse",
              'distance': 100000000,
            }
          },
        
        },
        retina_detect: true,

      } }
      />
    </div>
    </div>
  );
}

export default memo(InteractifAnimation);
