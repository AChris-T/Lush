'use client';
import { useState, useEffect } from 'react';
import inverted from '../../public/images/inverted.png';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Adewale O.',
    role: 'Compliance Manager, FinEdge Group',
    text: `The training delivered by Lush Corporate Services transformed the way our team approaches compliance. Clear, engaging, and practical—exactly what we needed.`,
  },
  {
    id: 2,
    name: 'David K.',
    role: 'HR Lead, CoreBridge Consulting',
    text: `Working with Adedolapo was a turning point for our leadership team. Her coaching sessions brought clarity and helped us define new strategic direction.`,
  },
  {
    id: 3,
    name: 'Grace T.',
    role: 'Team Lead, BlueWave Solutions',
    text: `Exceptional insights and a powerful session. We left inspired and ready to take bold actions.`,
  },
  {
    id: 4,
    name: 'Michael B.',
    role: 'Operations Manager, Apex Logistics',
    text: `Practical strategies, actionable advice, and great energy. Absolutely worth it.`,
  },
];
export default function Testimonies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client-side before using window
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener
      window.addEventListener('resize', checkMobile);

      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (isMobile) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 2 + testimonials.length) % testimonials.length
      );
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }

    // For desktop, show two testimonials side by side
    return testimonials.slice(currentIndex, currentIndex + 2);
  };

  return (
    <section className="bg-shade-100 text-white py-16 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <p className="uppercase text-sm tracking-wide text-center text-gray-300 mb-1">
          What people say
        </p>
        <h2 className="text-2xl font-semibold text-center mb-10">
          Testimonials
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-shade-200 rounded-xl p-6 w-full md:w-1/2 relative hover:shadow-lg transition-shadow duration-300"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg leading-relaxed mb-4"
                >
                  "{testimonial.text}"
                </motion.p>
                <div className="mt-4 flex justify-between w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="font-semibold">~{testimonial.name}</p>
                    <p className="text-sm text-gray-300 italic">
                      {testimonial.role}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Image src={inverted} alt="" className="w-12 h-12" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 mt-6"
        >
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                isMobile
                  ? index === currentIndex
                    ? 'w-6 bg-[#EF5B2C]'
                    : 'w-2 bg-shade-200'
                  : index === currentIndex || index === currentIndex + 1
                  ? 'w-6 bg-[#EF5B2C]'
                  : 'w-2 bg-shade-200'
              }`}
            />
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-4 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#3A2218] text-white flex items-center justify-center hover:bg-[#28150f] transition"
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#EF5B2C] text-white flex items-center justify-center hover:bg-[#c94416] transition"
          >
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
