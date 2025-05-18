'use client';
import AboutService from '@/components/AboutService';
import Header from '@/components/Header';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ServicePage() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <Header />
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <AboutService />
      </motion.div>
    </div>
  );
}
