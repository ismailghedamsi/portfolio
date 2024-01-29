import React, { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

const ParticleContainer = () => {
  useEffect(() => {
    (async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset("lightdark", {
        fullScreen: {
          enable: false,
        },
        particles: {
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          shape: {
            type: ["circle", "square", "triangle", "polygon"],
            options: {
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
                {
                  sides: 8,
                },
              ],
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      });

      tsParticles.load({
        id: "particles-js",
        options: {
            particles: {
                number: {
                    value: 50, // Adjust the number of stars
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: ["#ffffff", "#ffe500", "#ff8c00"], // Array of star colors
                },
                shape: {
                    type: "star", // Shape of the particles
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5 // Number of sides for the star shape
                    },
                },
                opacity: {
                    value: 0.8, // Adjust for brightness
                    random: true, // Stars have random opacities
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1, // Stars "twinkle" by changing opacity
                        sync: false
                    }
                },
                size: {
                    value: 3, // Adjust for star size
                    random: true, // Stars have random sizes
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false // Disabling line links between stars
                },
                move: {
                    enable: true,
                    speed: 2, // Adjust for star movement speed
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out", // Stars will move out of the canvas
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: false,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: false,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true // Adjust for retina displays
        }
    });
    

    })();
  }, []);

  const containerStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    pointerEvents: "none" // Add this line
  };
  


  return (
    <>
      <div id="light" style={containerStyles}>
        {/* The particle container for light */}
      </div>
    </>
  );
};

export default ParticleContainer;
