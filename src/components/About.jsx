'use client';
import Image from 'next/image';
import React from 'react';
import founder from '../../public/images/found.png';
import ArrowLeft from '../../public/Icons/ArrowLeft';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-green-200 hev w-full flex flex-col-reverse md:flex-row items-center gap-6 md:gap-28 justify-between text-gray-200 lg:p-20 px-4 md:px-10 py-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex-1"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-widest uppercase"
        >
          About Lush
        </motion.h3>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[24px] md:text-[32px] font-bold uppercase"
        >
          Meet the founder
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="leading-7 mt-4"
        >
          Adedolapo Adedayo is qualified Regulatory Risk and Compliance expert,
          Corporate training facilitator and a certified member of CISI with
          over a decade of experience. Her expertise spans Corporate governance,
          Regulatory Compliance and Professional development
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="leading-7 mt-10"
        >
          As an individual who is very passionate about helping people grow with
          purpose and integrity, she works with individuals and organizations to
          build effective systems and unlock lasting transformation.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-yellow-100 rounded-xl flex items-center gap-2 px-6 py-4 text-green-200 font-bold hover:bg-opacity-90 transition-all duration-300"
        >
          Learn More About Our Story 
          <motion.div 
            whileHover={{ x: -5 }} 
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft />
          </motion.div>
        </motion.button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex md:hidden flex rounded-[20px] overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={founder} alt="founder" className="rounded-[20px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
