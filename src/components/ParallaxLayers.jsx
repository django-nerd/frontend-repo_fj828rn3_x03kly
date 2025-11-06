import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayers = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden bg-[#2C2C2C]">
      <motion.img
        style={{ y: bgY, opacity }}
        src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2069&auto=format&fit=crop"
        alt="Bamboo forest background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <motion.img
        style={{ y: midY }}
        src="https://images.unsplash.com/photo-1514890547357-a9ee0a56fd72?q=80&w=2070&auto=format&fit=crop"
        alt="Torii gates middle layer"
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-80"
      />

      <motion.div
        style={{ y: fgY }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="rounded-xl bg-black/30 px-6 py-4 text-center text-white backdrop-blur-sm ring-1 ring-white/10">
          <h4 className="font-serif text-2xl">Layers of Heritage</h4>
          <p className="mt-1 text-white/80">A gentle parallax guides you through time and place.</p>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
    </section>
  );
};

export default ParallaxLayers;
