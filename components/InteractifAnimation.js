import styles from '../styles/Home.module.css';
import { memo, useState } from 'react';
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

    engine.load('tsparticles', {



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
    <div className="bg-black">
      <div className="App">
     
        <Particles
          id="particles-hereAlso"
          loaded={particlesLoaded}
          init={particlesInit}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background:'black'

          }}
          options={{
            'fullScreen': {
              'enable': false
            },

            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 500
                }
              },
              life: {
                duration: {
                  value: 5000, // durée de vie en millisecondes
                  random: true // valeur aléatoire pour chaque particule
                },
                count: 1 // nombre de particules à créer
              },
              destroy: {
                enable: true, // faire disparaître les particules de manière smooth
                mode: 'none' // mode de destruction (none, size, opacity, etc.)
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "circle",
              },
              "opacity": {
                "value": 0.1,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": true
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

              "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.1,
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
                  "enable": true,
                  "rotateX": 12000,
                  "rotateY": 13000
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "opacity",
                  "opacity": 0.1,
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse",
                  'distance': 1,
                }
              },

            },
            retina_detect: true,

          }}
        />
        <Particles
          id="particles-here"
          loaded={particlesLoaded}
          init={particlesInit}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',

          }}
          options={{
            'fullScreen': {
              'enable': false
            },

            "particles": {
              "number": {
                "value": 200,
                "density": {
                  "enable": true,
                  "value_area": 750
                }
              },
              life: {
                duration: {
                  value: 5000, // durée de vie en millisecondes
                  random: true // valeur aléatoire pour chaque particule
                },
                count: 1 // nombre de particules à créer
              },
              destroy: {
                enable: true, // faire disparaître les particules de manière smooth
                mode: 'none' // mode de destruction (none, size, opacity, etc.)
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "circle",
              },
              "opacity": {
                "value": 0.1,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": true
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
              "line_linked": {
                "enable": true,
                "distance": 100,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
              },

              links: {
                enable: true,
                distance: 50,
                color: "white",
                opacity: 0.1,
                width: 0.1,
                triangles: {
                  enable: true,
                  color: "#FFFFFF",
                  opacity: {
                    value: 0,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      opacity_max: 0.1,
                      sync: true
                    }
                  },
                  frequency: 2,
                  length: 5
                }
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
                  "rotateX": 2600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "opacity",
                  "opacity": 0.1,
                  links: {
                    enable: true,
                    opacity: 0
                  }
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse",
                  'distance': 1,
                },
                "onPress": {
                  "enable": true,
                  "mode": "repulse",
                  'distance': 1,
                }
              },

            },
            retina_detect: true,

          }}
        />
      </div>
    </div>
  );
}

export default memo(InteractifAnimation);
