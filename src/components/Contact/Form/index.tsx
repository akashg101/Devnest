import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/imagePath'

const ContactForm = () => {
  return (
    <>
      <section className='dark:bg-slate-900 bg-white pt-0 md:pb-24 pb-10'>
        <div className='container'>
          <div className='grid lg:grid-cols-12 grid-cols-1 md:gap-20 gap-10'>
            <div className='lg:col-span-6 col-span-1'>
              <h2 className='max-w-277 sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white mb-9'>
                Let's Work Together
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-8'>
                Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
              </p>
              <form className='flex flex-wrap w-full m-auto justify-between gap-4'>
                {/* First and Last Name Row */}
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='first-name'
                      className='pb-3 inline-block text-base text-gray-700 dark:text-gray-300'>
                      First Name*
                    </label>
                    <input
                      id='first-name'
                      className='w-full text-base px-4 rounded-lg py-2.5 border-gray-300 dark:border-slate-700 border-solid dark:text-white dark:bg-slate-800 border transition-all duration-500 focus:border-primary dark:focus:border-dark-accent focus:border-solid focus:outline-0'
                      type='text'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='last-name'
                      className='pb-3 inline-block text-base text-gray-700 dark:text-gray-300'>
                      Last Name*
                    </label>
                    <input
                      id='last-name'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-gray-300 dark:border-slate-700 border-solid dark:text-white dark:bg-slate-800 border transition-all duration-500 focus:border-primary dark:focus:border-dark-accent focus:border-solid focus:outline-0'
                      type='text'
                    />
                  </div>
                </div>

                {/* Email and Project Type Row */}
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='email'
                      className='pb-3 inline-block text-base text-gray-700 dark:text-gray-300'>
                      Email address*
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-gray-300 dark:border-slate-700 border-solid dark:text-white dark:bg-slate-800 border transition-all duration-500 focus:border-primary dark:focus:border-dark-accent focus:border-solid focus:outline-0'
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='projectType'
                      className='pb-3 inline-block text-base text-gray-700 dark:text-gray-300'>
                      Project Type*
                    </label>
                    <select
                      id='projectType'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-gray-300 dark:text-white border-solid dark:bg-slate-800 border transition-all duration-500 focus:border-primary dark:focus:border-dark-accent dark:border-slate-700 focus:border-solid focus:outline-0'>
                      <option value=''>Select project type</option>
                      <option value='Website'>Website Development</option>
                      <option value='WebApp'>Web Application</option>
                      <option value='MobileApp'>Mobile App</option>
                      <option value='Design'>UI/UX Design</option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='mx-0 my-2.5 w-full'>
                  <button
                    className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors'>
                    Get In Touch
                  </button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className='lg:col-span-6 col-span-1'>
              <Image
                src={getImgPath('/images/contact/contact.jpg')}
                alt='Contact'
                width={0}
                height={0}
                quality={100}
                sizes='100vh'
                className='bg-no-repeat bg-contain rounded-lg w-526 h-650'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
