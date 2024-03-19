'use client'

import React from 'react'
import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import { Particles, initParticlesEngine } from "@tsparticles/react"
import { Container } from "@tsparticles/engine"
import AnimationBackgroundConfig from './AnimationBackgroundConfig'


const AnimationBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={AnimationBackgroundConfig}
      />
    );
  }

  return <></>;
}

export default AnimationBackground