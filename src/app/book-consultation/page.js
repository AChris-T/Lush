'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import FacebookIcon from '../../../public/Icons/FacebookIcon';
import TwitterIcon from '../../../public/Icons/TwitterIcon';
import LinkdinIcon from '../../../public/Icons/LinkdinIcon';
import Stepper from '@/components/consultaionForm/Stepper';

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

export default function page() {
  return (
    <div className="overflow-hidden">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Header />
      </motion.div>
      <div className="py-[75px] px-2 md:px-[39px] gap-[10px] flex flex-col">
        {/*    <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
      /> */}
        <div className="flex w-full items-start  justify-between  flex-col lg:flex-row mt-[30px] md:mt-[85px] gap-[30px] ">
          <div className="flex flex-col justify-center gap-[50px] w-full ">
            <h3 className="text-[40px] w-full flex flex-col items-center  md:items-start md:text-[80px] leading-12  font-semibold md:leading-24 text-shade-100 lg:w-[647px] md:text-start  text-center lg:text-start ">
              Your Next
              <p>Big Opportunity </p> Starts Here! 🚀
            </h3>
            <div className="lg:grid grid-cols-1 hidden px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 md:mx-20 lg:mx-0">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[24px] text-black">
                  Direct Contact
                </h3>
                <h3 className="flex gap-3 items-center font-semibold text-base text-black">
                  Email:
                  <span className="text-green-100 font-normal">
                    collab@lush.co
                  </span>
                </h3>
                <h3 className="flex gap-8 items-center font-semibold text-base text-black">
                  Tel:
                  <span className="text-green-100 font-normal">
                    +44 20 7946 XXXX
                  </span>
                </h3>
                <h3 className="flex gap-3 items-start font-semibold text-base text-black">
                  Office:
                  <span className="text-green-100 w-full md:w-[163px] font-normal">
                    123 Business Centre, Innovation Park, London, EC2A 1NT,
                    United Kingdom{' '}
                  </span>
                </h3>
              </div>
              <div className="flex flex-col gap-4 ]">
                <h3 className="font-semibold text-[24px] text-black">
                  Social Media
                </h3>
                <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                  <FacebookIcon />
                  <span className="text-black-400 w-[163px] font-normal">
                    @lush
                  </span>
                </h3>
                <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                  <TwitterIcon />
                  <span className="text-black-400 w-[163px] font-normal">
                    @lush.co{' '}
                  </span>
                </h3>
                <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                  <LinkdinIcon />
                  <span className="text-black-400 w-[163px] font-normal">
                    @lush
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <Stepper />
        </div>
        <div className="grid   grid-cols-1 lg:hidden px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 w-full mt-10 lg:mx-0">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[20px] text-black">
              Direct Contact
            </h3>
            <h3 className="flex gap-3 items-center font-semibold text-base text-black">
              Email:
              <span className="text-green-100 font-normal">collab@lush.co</span>
            </h3>
            <h3 className="flex gap-8 items-center font-semibold text-base text-black">
              Tel:
              <span className="text-green-100 font-normal">
                +44 20 7946 XXXX
              </span>
            </h3>
            <h3 className="flex gap-3 items-start font-semibold text-base text-black">
              Office:
              <span className="text-green-100 w-full  font-normal">
                123 Business Centre, Innovation Park, London, EC2A 1NT, United
                Kingdom{' '}
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-4 ]">
            <h3 className="font-semibold text-[20px] text-black">
              Social Media
            </h3>
            <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
              <FacebookIcon />
              <span className="text-black-400 w-[163px] font-normal">
                @lush
              </span>
            </h3>
            <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
              <TwitterIcon />
              <span className="text-black-400 w-[163px] font-normal">
                @lush.co{' '}
              </span>
            </h3>
            <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
              <LinkdinIcon />
              <span className="text-black-400 w-[163px] font-normal">
                @lush
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
