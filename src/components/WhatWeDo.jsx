'use client';
import React from 'react';
import Sheild from '../../public/Icons/Sheild';
import Chart from '../../public/Icons/Chart';
import Board from '../../public/Icons/Board';
import Arrow from '../../public/Icons/Arrow';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function WhatWeDo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full hav flex flex-col gap-6 lg:gap-16 justify-center items-center py-16"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center"
      >
        <h3 className="text-xs text-gray-100 tracking-widest uppercase">
          What We Do
        </h3>
        <h3 className="text-[24px] md:text-[32px] font-bold uppercase">
          OUR SERVICE
        </h3>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-col lg:flex-row gap-6 lg:gap-0 md:px-[13px]"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex gap-5 px-10 flex-col justify-center items-center  transition-shadow duration-300 rounded-xl p-6"
        >
          <motion.div transition={{ duration: 0.2 }}>
            <Sheild />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold">Compliance Training</h3>
          <p className="text-center text-green-100 leading-7">
            In-person and online compliance training for individuals and
            businesses tailored to industry needs, ensuring clarity, confidence,
            and growth.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex gap-5 px-10 flex-col justify-center items-center  transition-shadow duration-300 rounded-xl p-6"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Chart />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold">Business Consulting</h3>
          <p className="text-center leading-7 text-green-100">
            Expert guidance to build frameworks and controls that work
            efficiently and meet regulatory standards.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="flex gap-5 px-10 flex-col justify-center items-center  transition-shadow duration-300 rounded-xl p-6"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Board />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold text-center">
            Professional Career Coaching
          </h3>
          <p className="text-center leading-7 text-green-100">
            Personal and professional coaching for leadership, career growth,
            and purpose-driven transformation at every level.
          </p>
        </motion.div>
      </motion.div>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-shade-100 flex gap-2 items-center text-[18px] text-white font-medium px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300"
      >
        <Link href="/service" className="w-full flex items-center gap-2">
          Get Started{' '}
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Arrow />
          </motion.div>
        </Link>
      </motion.button>
    </motion.div>
  );
}
