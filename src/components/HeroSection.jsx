'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="hero md:h-[761px] h-[500px] hav flex flex-col justify-center items-center text-white px-3 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[28px] md:text-[64px] font-bold md:leading-20 text-center lg:w-[1100px]"
      >
        Simplifying Regulatory Compliance for Business Growth.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="lg:px-[350px] text-center mt-4"
      >
        Expert guidance, coaching, and consulting to help your business stay
        compliant and confident.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="flex mt-6 gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white cursor-pointer bg-shade-100 px-2 md:px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          Book A Consultation
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-shade-100 cursor-pointer text-[18px] font-medium bg-lightshade-100 px-2 md:px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          <Link href="/service" className="w-full">
            Explore Our Service
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
