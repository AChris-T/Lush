'use client';
import React, { useState, useEffect } from 'react';
import group from '../../public/images/common.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
//import Menubar from '../../public/icons/Menubar';
import { useRouter } from 'next/navigation';
import Menubar from '../../public/Icons/Menubar';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/service' },
  { name: 'Contact', href: '/contact' },
];
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll events and body scroll lock
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setScrolled(currentScrollPos > 20);

      if (scrollingDown && currentScrollPos > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMobileMenuOpen]);

  // Handle mobile menu open/close
  useEffect(() => {
    if (isMobileMenuOpen) {
      setScrollPosition(window.pageYOffset);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen, scrollPosition]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: '',
        stiffness: 80,
        damping: 20,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: '',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`px-4 hav md:px-[40px]  bg-transpar backdrop-blur-sm max-w-[1512px] text-black mx-auto py-[16px] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-sm shadow-md py-[12px]' : ' pt-[32px]'
        }`}
        initial="visible"
        animate={visible ? 'visible' : 'hidden'}
        variants={navbarVariants}
      >
        <div className="flex justify-between items-center w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src={group}
                alt="Group Logo"
                width={scrolled ? 100 : 110}
                height={scrolled ? 60 : 60}
                priority
                className="object-cover transition-all duration-300"
              />
            </Link>
          </motion.div>
          <div className="hidden items-center lg:flex gap-4">
            {NAV_LINKS.map(({ name, href }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <NavLink href={href} pathname={pathname} scrolled={scrolled}>
                  {name}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              className={` hidden lg:flex text-[16px] font-medium  bg-shade-100 rounded-[12px] text-white transition-all duration-300 ${
                scrolled ? ' text-[16px]' : ''
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/book-consultation" className="px-[32px] py-4">
                Book a Consultation{' '}
              </Link>
            </motion.button>
            <motion.button
              className={`lg:hidden flex transition-all duration-300 ${
                scrolled ? 'py-3 text-[16px]' : ''
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
              }}
              onClick={handleMobileMenuToggle}
            >
              {/*  <Menubar /> */}
            </motion.button>
          </div>
          <motion.button
            className={`lg:hidden cursor-pointer  z-20 flex transition-all duration-300 ${
              scrolled ? 'py-3 text-[16px]' : ''
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
            }}
            onClick={handleMobileMenuToggle}
          >
            <Menubar fill={'#452B14'} />
          </motion.button>{' '}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex w-full flex-col  h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  {/*  <Image
                    src={group}
                    alt="Group Logo"
                    width={100}
                    height={60}
                    priority
                  /> */}
                  <motion.button
                    className="p-2"
                    onClick={handleMobileMenuToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6 text-green-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex flex-col  justify-center gap-6 w-full">
                  {NAV_LINKS.map(({ name, href }, index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full flex flex-col justify-center items-center"
                    >
                      <Link
                        href={href}
                        className={`text-[18px] w-full flex items-center justify-center font-medium ${
                          pathname === href ? ' font-semibold w-full' : ''
                        }`}
                        onClick={handleMobileMenuToggle}
                      >
                        {name}
                      </Link>
                    </motion.div>
                  ))}
                  <Link
                    href="/book-consultation"
                    className=" bg-shade-100 h-[60px] flex justify-center items-center  rounded-[12px] text-yellow-200 text-[18px] font-semibold w-full"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={handleMobileMenuToggle}
                  >
                    Book a Consultation{' '}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

const NavLink = ({ href, pathname, children, scrolled }) => {
  const isActive = pathname === href;
  const router = useRouter();

  const handleClick = (e) => {
    if (href === '#testimonials') {
      e.preventDefault();

      if (pathname === '/') {
        const el = document.getElementById('testimonials');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/#testimonials');
      }
    }
  };

  return (
    <div className="flex">
      <Link
        href={href === '/testimonials' ? '/' : href}
        onClick={handleClick}
        className={`relative text-base transition-all duration-300  ${
          scrolled ? 'text-black text-[15px]' : 'text-base'
        } ${
          isActive
            ? 'text-shade-100 font-medium after:block after:h-[3px] after:rounded after:bg-[#FFD400] after:w-full after:mt-[0px]'
            : 'font-medium text-shade-100'
        }`}
      >
        <motion.span
          whileHover={{
            scale: 1.05,
            color: '',
          }}
        >
          {children}
        </motion.span>
      </Link>
    </div>
  );
};
