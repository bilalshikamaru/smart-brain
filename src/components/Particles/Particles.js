import React from 'react'
import Ptcls from "react-tsparticles";

const opts={
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },   
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 125,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.25,
        straight: false,
      },
      opacity: {
        value: 0.25,
      },         
    },
  }

const Particles=()=>{
    return(
        <div>
            <Ptcls className='particles'options={opts}/>
        </div>
     )
}
export default Particles
