import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="relative w-full bg-[#2C2C2C] py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 p-8 text-center text-white backdrop-blur-md">
          <h3 className="font-serif text-3xl">Begin Your Journey</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Craft a tailored itinerary through temples, gardens, and neon cityscapes. Subtle luxury, thoughtful detail.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="rounded-full bg-[#D4AF37] px-6 py-3 font-medium text-black shadow-lg shadow-[#D4AF37]/20 transition-colors hover:bg-[#e3bf57]"
            >
              Plan with a Specialist
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 hover:bg-white/10"
            >
              Explore Sample Routes
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
