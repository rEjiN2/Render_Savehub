"use client"
import {Particles} from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import React,{useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  // const options = useMemo(() => {
  //   // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
  //   // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
  //   return {
  //     background: {
  //       color: "#000", // this sets a background color for the canvas
  //     },
  //     fullScreen: {
  //       enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
  //       zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  //     },
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true, // enables the click event
  //           mode: "push", // adds the particles on click
  //         },
          // onHover: {
          //   enable: true, // enables the hover event
          //   mode: "repulse", // make the particles run away from the cursor
          // },
  //       },
        // modes: {
        //   push: {
        //     quantity: 10, // number of particles to add on click
        //   },
        //   repulse: {
        //     distance: 100, // distance of the particles from the cursor
        //   },
        // },
  //     },
      // particles: {
      //   links: {
      //     enable: true, // enabling this will make particles linked together
      //     distance: 200, // maximum distance for linking the particles
      //   },
      //   move: {
      //     enable: true, // enabling this will make particles move in the canvas
      //     speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
      //   },
      //   opacity: {
      //     value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
      //   },
      //   size: {
      //     value: { min: 1, max: 3 }, // let's randomize the particles size a bit
      //   },
      // },
  //   };
  // }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async(engine) => {
   await loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  const particlesLoaded = useCallback(async()=>{

  },[])


  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return(
    <Particles style={{width:'100%' , height:'100%' , position:'absolute' ,transform:'translateZ(0)'}}  id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
    options={{
      fullScreen: { enable: true },
      background: {
        color: {
          value: "#000000", // Dark background for better visibility
        },
      },
      particles: {
        color: {
          value: "#ffffff", // White color for snow
        },
        move: {
          direction: "bottom",
          enable: true,
          random: false,
          straight: false,
          speed: 2,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10,
        },
      },
    }}
    />
  )
};

export default ParticlesComponent;