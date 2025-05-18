'use client';
import Image from 'next/image';
import React from 'react';
import founder from '../../public/images/Fram.png';
import simp from '../../public/images/Simplification.png';
import { motion } from 'framer-motion';

const textAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function AboutHero() {
  return (
    <div className="bg-[#F6F6F0] md:h-[761px] h-[500px] hav flex justify-between items-center text-black px-3 overflow-hidden">
      <motion.div 
        className="px-2 md:px-10 mt-10 md:mt-40 w-full flex z-10 flex-col gap-3.5"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={textAnimation}
      >
        <motion.p variants={textAnimation}>ABOUT US</motion.p>
        <motion.h3 
          className="text-2xl md:text-[64px] font-bold lg:w-[977px] md:leading-20"
          variants={textAnimation}
        >
          Learn more about our <br /> mission and the people behind Lush
          Corporate Services.
        </motion.h3>
        <motion.p 
          className="md:w-[666px] w-full text-lg md:text-2xl text-[#595959]"
          variants={textAnimation}
        >
          Lush Corporate Services is a people-centered brand offering training,
          coaching, and consulting solutions. We empower individuals and
          organizations to build purposeful, sustainable systems that drive
          growth.
        </motion.p>
        <motion.div
          variants={imageAnimation}
          className="mt-[-100px] hidden md:flex"
        >
          <Image
            src={simp}
            alt="founder"
            className="w-[230px] object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute right-0"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={imageAnimation}
      >
        <Image
          src={founder}
          alt="founder"
          className="w-[521px] object-cover"
        />
      </motion.div>
    </div>
  );
}
