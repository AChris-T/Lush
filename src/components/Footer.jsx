import Insta from '../../public/Icons/Insta';
import group from '../../public/images/logo.png';
import insta from '../../public/images/insta.png';
import twitter from '../../public/images/twitter.png';
import fb from '../../public/images/fb.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-green-200 w-full px-4 md:px-10 lg:px-20 py-[118px] mt-3">
      <div className="flex lg:items-center flex-col lg:flex-row">
        <h3 className="text-[24px] md:text-[32px] lg:text-[92px] flex-1 font-bold leading-28 text-white">
          Let’s Work Together
        </h3>
        <div className="flex-1 ">
          <h3 className="text-xl md:text-2xl text-white hav">
            Whether you’re looking for expert compliance training, strategic
            consulting, or personal coaching, we’re here to help. Reach out
            today and let’s create systems and growth strategies that work.
          </h3>
          <button className="text-green-200 mt-10 font-bold mb text-[18px] bg-[#FFD400] flex items-center gap-2 px-5 py-3 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
      <div className="mt-[140px] flex-col md:flex-row flex justify-between ">
        <div>
          <Image
            src={group}
            alt="Group Logo"
            width={150}
            height={41}
            priority
            className="object-cover transition-all duration-300"
          />
          <div className="mt-8 flex gap-3">
            <Image
              src={insta}
              alt="Group Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <Image
              src={twitter}
              alt="Group Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <Image
              src={fb}
              alt="Group Logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-28">
          <div className="flex flex-col gap-4">
            <h3 className="text-[30px] font-medium">Company</h3>
            <Link href={'/'} className="hav font-medium">
              Home
            </Link>
            <Link href={'/'} className="hav font-medium">
              About
            </Link>
            <Link href={'/'} className="hav font-medium">
              Service
            </Link>
            <Link href={'/'} className="hav font-medium">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[30px] font-medium">Contact</h3>
            <div className="flex items-center hav gap-6">
              <h3 className="font-medium">Email:</h3>
              <span>collab@lushcorpltd.co</span>
            </div>
            <div className="flex hav gap-6">
              <h3 className="font-medium">Office:</h3>
              <span className="w-[163px] leading-7">
                48 Wilmot Road, Dartford United Kingdom DA1 3BA
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="hav text-sm text-white mt-4">
        © 2025 Lush Corporate Services. All rights reserved.
      </p>
    </div>
  );
}
