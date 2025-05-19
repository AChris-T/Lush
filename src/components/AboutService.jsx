'use client';
import Image from 'next/image';
import React from 'react';
import comp from '../../public/images/comp.png';
import newq from '../../public/images/newq.png';
import ArrowLeft from '../../public/Icons/ArrowLeft';
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

const imageAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function AboutService() {
  return (
    <div className="flex hav flex-col items-center px-2 lg:px-20 gap-10 justify-center pt-30">
      <motion.div
        className="flex flex-col items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-xs text-gray-100 tracking-widest uppercase">
          SERVICES{' '}
        </h3>
        <h3 className="text-[24px] md:text-[32px] font-bold uppercase">
          Explore What We Do{' '}
        </h3>
      </motion.div>
      <div className="flex flex-col mb-10 gap-24">
        <motion.div
          className="flex flex-col-reverse md:flex-row gap-10 md:gap-4 justify-between"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex-1 flex flex-col gap-5">
            <motion.h3 className="text-2xl font-bold" variants={fadeInUp}>
              Compliance Training
            </motion.h3>
            <motion.p className="text-green-100 leading-8" variants={fadeInUp}>
              At Lush Corporate Services, our compliance training programs are
              built to ensure that your team understands and meets industry
              regulations and standards. We deliver practical, up-to-date
              sessions that simplify complex compliance requirements, reduce
              organizational risk, and promote ethical workplace behavior. From
              policy awareness to operational adherence, we help teams align
              with legal and regulatory expectations in a way that's engaging,
              clear, and easy to apply.
            </motion.p>
            <motion.button
              className="bg-[#FFD400] text-[#485702] font-black text-lg w-[200px] gap-2 flex items-center justify-center p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowLeft />
            </motion.button>
          </div>
          <motion.div
            className="flex-1 justify-end flex"
            variants={imageAnimation}
          >
            <Image src={comp} alt="" className="object-cover" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-between flex-col-reverse gap-10 md:gap-4 md:flex-row-reverse"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex-1 flex flex-col gap-5">
            <motion.h3 className="text-2xl font-bold" variants={fadeInUp}>
              Business Consulting
            </motion.h3>
            <motion.p className="text-green-100 leading-8" variants={fadeInUp}>
              Our business consulting services are designed to help
              organizations identify inefficiencies, restructure their systems,
              and scale their impact. We dive deep into your processes, teams,
              and goals to develop customized strategies that create real
              results. Whether you're solving internal challenges, improving
              workflows, or redefining your vision, we act as trusted partners
              in shaping a smarter, more sustainable business future.
            </motion.p>
            <motion.button
              className="bg-[#FFD400] text-[#485702] font-black text-lg w-[200px] gap-2 flex items-center justify-center p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowLeft />
            </motion.button>
          </div>
          <motion.div
            className="flex-1 justify-start flex"
            variants={imageAnimation}
          >
            <Image src={newq} alt="" className="object-cover" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-between flex-col-reverse md:flex-row gap-10 md:gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex-1 flex flex-col gap-5">
            <motion.h3 className="text-2xl font-bold" variants={fadeInUp}>
              Professional Career Coaching
            </motion.h3>
            <motion.p className="text-green-100 leading-8" variants={fadeInUp}>
              We support professionals who want to gain clarity, grow
              confidently, and thrive in their careers. Through personalized
              coaching sessions, we help clients unlock their potential, refine
              their strengths, and develop action plans that align with their
              goals. Whether you're transitioning roles, building leadership
              capacity, or seeking fulfillment, our coaching offers strategic
              guidance, encouragement, and tools to help you move forward with
              purpose.
            </motion.p>
            <motion.button
              className="bg-[#FFD400] text-[#485702] font-black text-lg w-[200px] gap-2 flex items-center justify-center p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowLeft />
            </motion.button>
          </div>
          <motion.div
            className="flex-1 justify-end flex"
            variants={imageAnimation}
          >
            <Image src={comp} alt="" className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
