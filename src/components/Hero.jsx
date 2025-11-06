import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  return (
    <section ref={ref} className="relative h-[95vh] w-full overflow-hidden bg-[#2C2C2C]">
      {/* Spline 3D scene as full-width, full-height cover background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block interaction */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        aria-hidden
      />

      {/* Foreground copy with gentle parallax */}
      <motion.div
        style={{ scale: fgScale }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <motion.div style={{ y: titleY }} className="px-6 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/80">Old Japan heritage meets modern travel</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white drop-shadow-md md:text-6xl">
            Immerse in Japan
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Serene journeys through temples, gardens, and vibrant cities — crafted with elegance and calm.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <span className="text-xs">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
