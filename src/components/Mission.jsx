import React from 'react';

export default function Mission() {
  return (
    <div className=" px-2 lg:px-[128px] pt-[129px] flex flex-col items-center">
      <h3 className="text-gray-100 tracking-widest uppercase text-xs ">
        Mission
      </h3>
      <h3 className="text-[24px] md:text-[32px] font-bold uppercase">
        Our Mission Statement{' '}
      </h3>
      <h3 className="mt-10 text-center text-green-100 text-lg md:text-2xl leading-10">
        At Lush Corporate Services, our mission is to empower individuals and
        organizations by delivering transformational learning experiences. We
        are committed to helping our clients move from where{' '}
        <br className="hidden lg:flex" /> they are to where they desire to be—by
        offering training, coaching, and consulting solutions
        <br className="hidden lg:flex" /> tailored to their specific needs. Our
        goal is to reshape mindsets, improve systems, and equip{' '}
        <br className="hidden lg:flex" /> people with the tools, strategies, and
        confidence they need to grow, perform, and lead with{' '}
        <br className="hidden lg:flex" />
        purpose.
      </h3>
    </div>
  );
}
