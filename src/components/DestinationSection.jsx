import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DestinationSection = ({ title, subtitle, image, align = 'left' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative flex min-h-[90vh] items-center justify-center bg-[#2C2C2C] py-16">
      <div className={`container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 ${align === 'left' ? '' : 'md:[&>*:first-child]:order-2'}`}>
        <motion.div style={{ opacity, y }} className="text-white">
          <h3 className="font-serif text-3xl font-semibold md:text-4xl">{title}</h3>
          <div className="mt-3 h-[2px] w-16 bg-[#D4AF37]" />
          <p className="mt-4 text-white/80">{subtitle}</p>
        </motion.div>

        <motion.div
          style={{ scale, opacity }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10"
        >
          <motion.img
            style={{ y: imgY }}
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSection;
