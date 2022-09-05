import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Home() {
  return (
    <div>
         <Head>
        <title>eTijar - Make Profit not Interest</title>
        <meta name="description" content="Etijar is building a banking stack for MSME. We are empowering
        the next generation of businesses, powered by non-interest finance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Hero*/}
      <Header />
    
    <div className='w-full bg-gradient-to-br from-primary to-primary2 2xl:px-72
     xl:px-10 px-2 md:pt-48 pt-24'>
<div className='px-10 h-auto'>
<Swiper
      // install Swiper modules
      modules={[ Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      slidesPerColumn={{delay:2000}}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='aribau bg-white px-5 py-24 mb-3  text-center text-primary font-bold border-b-8 border-secondary md:text-3xl text-xl'>Africa has $330 Billion SME Financing GAP.</SwiperSlide>
      <SwiperSlide className='aribau bg-white px-5 py-24 mb-3  text-center text-primary font-bold border-b-8 border-secondary md:text-3xl text-xl'>132 Million MSMEs with no banking finance.</SwiperSlide>
      <SwiperSlide className='aribau bg-white px-5 py-24 mb-3  text-center text-primary font-bold border-b-8 border-secondary md:text-3xl text-xl'>30% of these MSMEs need non-interest Islamic finance.</SwiperSlide>
      <SwiperSlide className='aribau bg-white px-5 py-24 mb-3  text-center text-primary font-bold border-b-8 border-secondary md:text-3xl text-xl'>But lack reliable credit data.</SwiperSlide>
      ...
    </Swiper>
    </div>
    <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap md:mt-14 mt-0'>
        <div className=' md:w-1/2 md:text-left text-center w-full md:px-10 px-2'>
        <h3 className='ttf text-white xl:text-6xl md:text-5xl sm:text-5xl text-4xl font-black mb-2'>What we&apos;re doing</h3>
        <p className='aribau text-secondary font-bold sm:text-sm text-xs mb-8 md:pr-5 pr-0'>Etijar is building a banking stack for MSME. We&apos;re empowering <br /> the 
        next generation of businesses, powered by non-interest finance. <br />
        <br />
        Using alternative data in place of credit history, we qualify MSMEs for non-interest business financing. <br /> <br />
        <span className='text-white'>Make profit, not interest…</span>
        </p>
       {/*} <form className='flex items-center md:justify-start justify-center mt-10 w-full'>
          <input className=' md:w-56 w-44 mr-3 border-none outline-none rounded-md text-sm bg-white p-3' type= "email" name='email' placeholder='Enter your email' />
          <button className='ribau text-sm border-none outline-none rounded-md text-white bg-black cursor-pointer p-3'>Join the waitlist</button>
        </form>*/}
        </div>
        <div className='relative flex md:justify-center justify-center text md:w-1/2 w-full md:px-10 px-2'>
          <img className='w-64 realtive z-30 md:-mt-8 mt-8' src="/phone2.png" alt="phone" />
          </div>
          </div>
    </div>

    <div className='aribau bg-white w-full 2xl:px-72
     xl:px-10 px-2 pt-10 text-black font-bold text-xl text-center'>
      Etijar is a financial technology company, not a bank. Banking services are provided by our CBN licensed banking partners
     </div>

     {/*growth*/}
      <div className='w-full bg-white flex md:justify-between justify-center flex-wrap  2xl:px-72
     xl:px-10 px-2 pt-16'>
        <div className='ttf w-full text-primary font-bold md:text-3xl text-lg text-center relative flex flex-col items-center'><span className='relative z-30'>Growth funding for SME businesses</span>
          <img className='w-80 bottom-0 z-10 absolute' src='/orangeLine.png' alt='line' />
        </div>
        
        <div className='shadow md:w-1/4 w-8/12 bg-white rounded-lg mt-6 flex justify-center items-center p-3'>
          <img className='w-10 mr-2' src='/tax.png' alt='tax'/>
          <p className='ttf font-black mt-3 text-primary md:text-lg text-sm'>Non-Interest funding</p>
        </div>
        <div className='shadow md:w-1/4 w-8/12 bg-white rounded-lg mt-6 flex justify-center items-center p-3'>
          <img className='w-10 mr-2' src='/flexible.png' alt='flexible'/>
          <p className='ttf font-black mt-3 text-primary md:text-lg text-sm'>Flexible repayment</p>
        </div>
        <div className='shadow md:w-1/4 w-8/12 bg-white rounded-lg mt-6 flex justify-center items-center p-3'>
          <img className='w-10 mr-2' src='/fast.png' alt='fast'/>
          <p className='ttf font-black mt-3 text-primary md:text-lg text-sm'>Fast approval</p>
        </div>
      </div>
       {/*create*/}

       <div className='w-full bg-white flex items-center  flex-col  2xl:px-72
     xl:px-10 px-2 pt-32'>
            <div className='flex items-start flex-col'>
            <div className='flex items-start justify-center'>
              <img className='md:w-10 w-8 mr-2' src='/check2.png' alt='check1' />
              <p className='ttf font-bold text-black md:text-lg text-xs'>Create a Business profile to manage day-to-day business processes.</p>
            </div>
            <div className='flex items-start justify-center'>
              <img className='md:w-10 w-8 mr-2' src='/check2.png' alt='check1' />
              <p className='ttf font-bold text-black md:text-lg text-xs'>Connect bank accounts.</p>
            </div>
            <div className='flex items-start justify-center'>
              <img className='md:w-10 w-8 mr-2' src='/check2.png' alt='check1' />
              <p className='ttf font-bold text-black md:text-lg text-xs'>Get funding offers.</p>
            </div>
            </div>
            </div>

             {/*create*/}
             <div className='w-full flex md:pt-48 pt-16'>
              <div className='ttf w-1/2 bg-secondary p-2 text-primary font-black text-center flex items-center justify-center md:text-5xl text-sm'>
                  Using alternative data
                  in place of
                  credit history, users can
                  qualify for non-interest
                  business financing.

              </div>
              <img className='w-1/2' src='/people.png' alt='people' />
      </div>

       {/*create*/}
       <div className='w-full bg-white flex items-center  flex-col  2xl:px-72
     xl:px-10 px-2 pt-32'>
      <div className='flex flex-col mb-8'>
        <p className='aribau text-secondary md:text-2xl text-lg uppercase text-center font-bold'>Insights</p>
        <p className='aribau text-black md:text-lg text-sm text-center'>Get actionable insights to help you grow faster.</p>
      </div>
      <div className='flex flex-col mb-8'>
        <p className='aribau text-secondary md:text-2xl text-lg uppercase text-center font-bold'>safe and secure</p>
        <p className='aribau text-black md:text-lg text-sm text-center'>We use end-to-end data encryption to handle your data.</p>
      </div>
      <div className='flex flex-col mb-8'>
        <p className='aribau text-secondary md:text-2xl text-lg uppercase text-center font-bold'>we grow together</p>
        <p className='aribau text-black md:text-lg text-sm text-center'>When you make money we make money too.</p>
      </div>

      <div className='w-full mt-24 pt-3 border-t-2 border-gray-300 text-primary font-bold text-sm text-center'>
      <span className='text-secondary'>*Etijar</span> is a financial technology company, not a bank. Banking services are provided by our CBN licensed banking partners.

      </div>
      </div>

      <Footer />
    </div>
  )
}
