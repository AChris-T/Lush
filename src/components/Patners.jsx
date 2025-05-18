import Image from 'next/image';
import React from 'react';
import DE from '../../public/images/Deliveroo.png';
import Ali from '../../public/images/tech.png';
import Nat from '../../public/images/layer.png';
import fin from '../../public/images/delivery.png';
import codebr from '../../public/images/force.png';

export default function Patners() {
  return (
    <div className="w-full flex flex-col mb-10 items-center justify-center space">
      <div className="overflow-hidden w-full">
        <div className="scrolling-track flex items-center gap-10 w-max">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <Image src={DE} alt="de" className="-mt-4" />
              <Image src={Ali} alt="de" className="-mt-4" />
              <Image src={Nat} alt="de" />
              <Image src={fin} alt="de" />
              <Image src={codebr} alt="de" />
              <Image src={Nat} alt="de" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
