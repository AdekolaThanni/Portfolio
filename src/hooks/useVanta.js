import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

const useVanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const container = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: container.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 9.0,
          maxDistance: 8.0,
          showDots: false,
          color: 0xaa14f0,
          backgroundColor: 0x0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return container;
};

export default useVanta;
