/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import FacebookIcon from '../../../public/Icons/FacebookIcon';
import LinkdinIcon from '../../../public/Icons/LinkdinIcon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Vector from '../../../public/images/Vector.png';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import Header from '@/components/Header';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
      phone: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const templateParams = {
        full_name: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      emailjs
        .send(
          'service_6be7yu5',
          'template_lya55ii',
          templateParams,
          '1esO0aga3_Y7FvYtT'
        )
        .then(
          (result) => {
            console.log('Email successfully sent!', result.text);
            toast.success('Message sent successfully!', {
              position: 'top-right',
              duration: 4000,
              style: {
                backgroundColor: '#4CAF50',
                color: 'white',
              },
            });
            resetForm();
          },
          (error) => {
            toast.error('Email sending failed', {
              position: 'top-right',
              duration: 4000,
              style: {
                backgroundColor: 'red',
                color: 'white',
              },
            });
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    },
  });
  return (
    <div>
      <Header />
      <div className="py-[75px] hav px-2 md:px-[39px] gap-[10px] flex flex-col">
        <Toaster />
        <div className="flex w-full items-start  justify-between  flex-col lg:flex-row mt-[30px] md:mt-[85px] gap-[30px] lg:gap-[10%]">
          <div className="flex flex-col justify-center ">
            <h3 className="text-xs text-center md:text-start text-gray-100 tracking-widest uppercase">
              Contact Us{' '}
            </h3>
            <h3 className="text-[72px] flex items-center md:items-start flex-col md:text-[91px] leading-[70px]  w-full font-bold md:leading-24 text-black lg:w-[647px] text-start  md:text-center lg:text-start ">
              Let’s Work
              <p>Together</p>
            </h3>
            <p className="text-[#8B988B] text-center md:text-start mt-10 w-full md:w-[529px] leading-7">
              Whether you are looking for expert Compliance training, Strategic
              Consulting or Professional Career Coaching, we're here to support.
              Reach out today and let's create Governance Structures and Growth
              Strategies that work.
            </p>
            <div className="grid mt-10 grid-cols-1  px-3 md:grid-cols-2 justify-center gap-10 md:gap-20 md:mx-20 lg:mx-0">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[24px] text-black">
                  Direct Contact
                </h3>
                <h3 className="flex gap-3 items-center font-semibold text-base">
                  Email:
                  <span className="text-green-100 font-normal">
                    info@lushcorporate.co.uk{' '}
                  </span>
                </h3>
                <h3 className="flex gap-3 items-start font-semibold text-base">
                  Office:
                  <span className="text-green-100 w-full md:w-[163px] font-normal">
                    48 Wilmot Road Dartford United Kingdom DA1 3BA
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
                    @LushCorp
                  </span>
                </h3>
                {/* s */}
                <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                  <LinkdinIcon />
                  <span className="text-black-400 w-[163px] font-normal">
                    @LushCorp
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end  rounded-[22px] border-black-500 shadow-2xl">
            <div className="flex flex-col   w-full p-[32px]">
              {/*  <h3 className="text-[24px] font-bold text-green-100 justify-center flex w-full ">
                Contact Us
              </h3>
              <p className="text-sm text-black-400 justify-center flex w-full">
                Get in touch with us, we will reach you within 24 hours
              </p> */}
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4 mt-[32px]"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="block   text-sm">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full text-green-100 px-4 border-[#E4E4E4] py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    {...formik.getFieldProps('fullName')}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.fullName}
                    </p>
                  ) : null}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full text-green-100 px-4 border-[#E4E4E4] py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                {/* Inquiry Type */}

                {/*  <div className="flex flex-col gap-2">
                  <label className="block text-sm">Inquiry Type</label>
                  <div className="w-full px-4 text-green-100 py-4 border border-[#8B988B] rounded-lg focus:outline-none focus:ring focus:border-green-500">
                    <select
                      name="inquiryType"
                      className="w-full  text-green-100  focus:outline-none "
                      {...formik.getFieldProps('inquiryType')}
                    >
                      <option value="">Select Option</option>
                      <option value="Bid-Writing Consulting">
                        Bid-Writing Consulting
                      </option>
                      <option value="Sustainability Consulting">
                        Sustainability Consulting
                      </option>
                      <option value="Commodity Management">
                        Commodity Management
                      </option>
                      <option value="Technology Delivery">
                        Technology Delivery
                      </option>
                    </select>
                  </div>
                  {formik.touched.inquiryType && formik.errors.inquiryType ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.inquiryType}
                    </p>
                  ) : null}
                </div> */}

                {/**Bid selector */}
                {/*  {formik.values.inquiryType === 'Bid-Writing Consulting' && (
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm">Bid-Writing Sector </label>
                    <div className="w-full px-4 text-green-100 py-4 border border-[#8B988B] rounded-lg focus:outline-none focus:ring focus:border-green-500">
                      <select
                        name="BidSector"
                        className="w-full  text-green-100  focus:outline-none "
                        {...formik.getFieldProps('BidSector')}
                      >
                        <option value="">Select Option</option>
                        <option value="Construction">Construction</option>
                        <option value="Facilities Management ">
                          Facilities Management
                        </option>
                        <option value="Healthcare and Social Care">
                          Healthcare and Social Care
                        </option>
                        <option value="Education & youth services">
                          Education & youth services
                        </option>
                        <option value="Education & youth services">
                          Education & youth services
                        </option>
                        <option value="Commercial and Domestic Cleaning services">
                          Commercial and Domestic Cleaning services
                        </option>
                        <option value="Charity">Charity</option>
                        <option value="others">others </option>
                      </select>
                    </div>
                    {formik.touched.BidSector && formik.errors.BidSector ? (
                      <p className="text-red-500 text-sm">
                        {formik.errors.BidSector}
                      </p>
                    ) : null}
                  </div>
                )} */}

                {/*    {formik.values.inquiryType === 'Technology Delivery' && (
                  <div className="flex flex-col gap-2">
                    <label className="text-green-100 font-medium">
                      Technology Type
                    </label>
                    <div className="border-black-400 border rounded-xl p-4">
                      <select
                        name="TechnologyType"
                        className="w-full  text-green-100  focus:outline-none "
                        {...formik.getFieldProps('TechnologyTypee')}
                      >
                        <option value="">Select a service</option>
                        <option value="App Development">App Development</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="Cloud Migration">Cloud Migration</option>
                        <option value="Process Automation">
                          Process Automation
                        </option>
                        <option value="Software Development">
                          Software Development
                        </option>
                      </select>
                    </div>
                  </div>
                )}
 */}
                {/*phone number*/}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    className="w-full text-green-100 px-4 border-[#E4E4E4] py-3 border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.phone}
                    </p>
                  ) : null}
                </div>
                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="block  text-sm">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 text-green-100 border-[#E4E4E4] border rounded-lg focus:outline-none focus:ring focus:border-green-500"
                    {...formik.getFieldProps('message')}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.message}
                    </p>
                  ) : null}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-shade-100 ${
                    isLoading ? ' cursor-not-allowed' : ' cursor-pointer'
                  }  text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2   transition`}
                >
                  {isLoading ? (
                    'Submitting....'
                  ) : (
                    <>
                      Send Us A Message{' '}
                      <Image
                        src={Vector}
                        alt=""
                        width={20}
                        height={20}
                        priority
                      />
                    </>
                  )}
                </button>
              </form>{' '}
            </div>
          </div>
          <div className=" grid-cols-1 hidden px-3 md:grid-cols-2 justify-center gap-8 md:gap-20 w-full mt-10 lg:mx-0">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[20px] ">Direct Contact</h3>
              <h3 className="flex gap-3 items-center font-semibold text-base">
                Email:
                <span className="text-black-400 font-normal text-green-100">
                  info@lushcorporate.co.uk
                </span>
              </h3>
              {/*   <h3 className="flex gap-8 items-center font-semibold text-base">
                Tel:
                <span className="text-black-400 font-normal text-green-100">
                  +44 20 7946 XXXX
                </span>
              </h3> */}
              <h3 className="flex gap-3 items-start font-semibold text-base ">
                Office:
                <span className="text-black-400 w-full  font-normal text-green-100">
                  48 Wilmot Road Dartford United Kingdom DA1 3BA
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-4 ]">
              <h3 className="font-semibold text-[20px] ">Social Media</h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <FacebookIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @LushCorp
                </span>
              </h3>
              <h3 className="flex gap-3 items-start font-semibold text-base text-green-100">
                <LinkdinIcon />
                <span className="text-black-400 w-[163px] font-normal">
                  @LushCorp{' '}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
