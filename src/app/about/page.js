'use client';
import About from '@/components/About';
import AboutHero from '@/components/AboutHero';
import Counter from '@/components/Counter';
import Header from '@/components/Header';
import Mission from '@/components/Mission';
import Patners from '@/components/Patners';
import Stat from '@/components/Stat';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Header />
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <AboutHero />
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.8 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <Mission />
      </motion.div>

      <div className="flex flex-col mt-20 gap-20">
        {/*  <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Stat />
        </motion.div> */}

        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 1 }}
        >
          <Patners />
        </motion.div> */}
      </div>
    </div>
  );
}
