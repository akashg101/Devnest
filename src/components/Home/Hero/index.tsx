'use client'
import Link from 'next/link'
import { getImgPath } from '@/utils/imagePath'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-clip top-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 circalanimat py-32" style={{ '--work-line-bg': `url(${getImgPath('/images/work-grow/work-line.png')})` } as React.CSSProperties}>
        <div className='banner-shap it-wrapper'>
          <div className='container'>
            <div className='flex flex-wrap items-center'>
              <div
                className='pb-3 sm:pb-0 md:w-2/3 w-full relative z-1'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <div className='mb-2'>
                  <span className='inline-block px-4 py-2 bg-dark-accent bg-opacity-10 text-dark-accent rounded-full text-sm font-semibold'>
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className='text-5xl md:text-6xl font-bold text-white dark:text-white mb-6 leading-tight'>
                  Freelance Developer & Designer
                </h1>
                <p className='text-xl text-gray-300 dark:text-gray-400 leading-8 mb-8 max-w-2xl'>
                  I create beautiful, functional websites and applications that help businesses grow. Specialized in modern web technologies and user-centric design.
                </p>
                <div className='flex flex-wrap items-center gap-4 mb-12'>
                  <Link href="/contact">
                    <button className='bg-dark-accent hover:bg-dark-accent-hover text-dark-bg dark:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                      Get In Touch
                    </button>
                  </Link>
                  <Link href="/portfolio">
                    <button className='border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-dark-bg dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-bg font-bold py-4 px-8 rounded-lg transition-all duration-300'>
                      View My Work
                    </button>
                  </Link>
                </div>

                {/* Social Proof */}
                <div className='space-y-6 mb-8'>
                  <div className='flex items-center gap-3'>
                    <span className='text-dark-accent font-semibold'>Highly Rated:</span>
                    <div className='flex gap-1'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-yellow-400'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 22 20'>
                          <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                        </svg>
                      ))}
                    </div>
                    <span className='text-gray-400 dark:text-gray-500'>(30+ Happy Clients)</span>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex items-center gap-2'>
                      <svg className='w-6 h-6 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                      </svg>
                      <span className='text-gray-300 dark:text-gray-400'>Responsive Design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <svg className='w-6 h-6 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                      </svg>
                      <span className='text-gray-300 dark:text-gray-400'>Performance</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <svg className='w-6 h-6 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                      </svg>
                      <span className='text-gray-300 dark:text-gray-400'>SEO Optimized</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className='mt-12'>
                  <p className='text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4'>Tech Stack</p>
                  <div className='flex flex-wrap gap-3'>
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                      <span key={tech} className='px-4 py-2 bg-slate-800 border border-slate-700 text-gray-300 rounded-full text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side decoration */}
              <div className='md:w-1/3 w-full relative z-0 mt-12 md:mt-0'>
                <div className='relative w-full h-96 flex items-center justify-center'>
                  <div className='absolute inset-0 bg-gradient-to-br from-dark-accent to-blue-600 rounded-3xl blur-3xl opacity-20'></div>
                  <div className='relative bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl'>
                    <h3 className='text-white font-bold text-xl mb-4'>Ready to Start?</h3>
                    <p className='text-gray-400 mb-6'>Let's discuss your project and create something amazing together.</p>
                    <Link href="/contact">
                      <button className='w-full bg-dark-accent hover:bg-dark-accent-hover text-dark-bg font-bold py-3 px-6 rounded-lg transition-all duration-300'>
                        Schedule a Call
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
