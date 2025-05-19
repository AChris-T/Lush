'use client';
import React, { useEffect, useState } from 'react';
import Expert from '../../public/Icons/Expert';
import Target from '../../public/Icons/Target';
import Guild from '../../public/Icons/Guild';
import Arrowwhite from '../../public/Icons/Arrowwhite';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Choose() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: <Expert />,
      title: 'Expert-Led Solutions',
      text: 'Led by a certified risk and compliance expert with 10+ years of experience.',
      border: '#45C646',
    },
    {
      icon: <Target />,
      title: 'Tailored to Your Needs',
      text: 'Each solution is customized to fit your goals, industry, and team context.',
      border: '#FF0000',
      iconBg: '#FFD3D3',
    },
    {
      icon: <Guild />,
      title: 'Compliance-Driven',
      text: 'We help you meet standards with clarity through practical, up-to-date guidance.',
      border: '#008EFF',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-[131px] justify-between px-4 md:px-10 lg:px-[121px] items-center py-16"
    >
      <motion.div
        variants={containerVariants}
        className="flex-1 flex flex-col gap-3"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            animate={{
              scale: activeIndex === index ? 1.02 : 1,
              borderColor: activeIndex === index ? card.border : 'transparent',
            }}
            transition={{ duration: 0.4 }}
            className={`flex gap-3.5 items-start border-[1px] rounded-xl lg:px-3 py-4 transition-all duration-300`}
          >
            <motion.div
              animate={{
                scale: activeIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className={`flex items-center justify-center w-[30px] h-[30px] rounded-full ${
                card.iconBg ? '' : ''
              }`}
            >
              {card.icon}
            </motion.div>
            <div className="flex flex-col gap-2 mt-1">
              <h3 className="inter font-bold text-[20px] text-[#12141D]">
                {card.title}
              </h3>
              <p className="text-green-100">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={containerVariants} className="flex-1">
        <motion.h3
          variants={itemVariants}
          className="text-xs tracking-widest uppercase"
        >
          What Makes Us Different
        </motion.h3>
        <motion.h3
          variants={itemVariants}
          className="text-[32px] font-bold uppercase"
        >
          Why Choose Us
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="leading-7 mt-4 text-green-100"
        >
          At Lush Corporate Services, we combine deep industry knowledge with a
          human-centered approach to deliver lasting impact. With over a decade
          of experience, we are committed to excellence, ethical practices, and
          building systems that help individuals and organizations thrive. Our
          services are tailored, practical, and purpose-driven—designed to meet
          your specific needs and produce real results.
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex bg-shade-100 text-white px-4 py-3 mt-10 rounded-xl items-center gap-2 hover:bg-opacity-90 transition-all duration-300"
        >
          <Link href="/service" className="w-full flex items-center gap-2">
            Get Started
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Arrowwhite />
            </motion.div>
          </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
