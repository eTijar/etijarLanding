import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'

export default function Contact() {
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
      <div className='w-full bg-white 2xl:px-72 xl:px-16 px-10 md:pt-28 pt-14 text-center'>
      <div className="md:px-56 sm:px-10 px-4">
      <p className='aribau text-success md:text-sm text-xs font-black'>Got a question?</p>
      <h3 className='ttf text-primary xl:text-5xl sm:text-4xl text-4xl font-black text-center'>Contact eTijar</h3>

      <p className='aribau text-black md:text-lg text-sm text-center mt-5'>We are here to help and answer any
      question you might have. We look forward to hearing from you.</p>
      </div>
    
        </div>
        <div className='w-full relative  md:mt-44 mt-16 bg-slate-200 py-5 px-3'>
      <svg className='absolute top-0 md:-mt-48 -mt-20 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2e8f0" fillOpacity="1" d="M0,192L1440,128L1440,320L0,320Z"></path></svg>
           <div className='w-full relative flex md:justify-between justify-center md:flex-nowrap flex-wrap mt-24 md:mb-0 mb-4 bg-white'> 
            <form className='md:w-1/2 md:-mt-44 -mt-0 w-full bg-white shadow-lg py-4 px-6'>
                <label className='aribau text-xs w-full flex font-bold mb-2'>Name</label>
                <input type='text' name='name' className='w-full rounded border-2 border-gray-200 p-1 mb-4' />
                <label className='aribau text-xs w-full flex font-bold mb-2'>Email</label>
                <input type='email' name='email' className='w-full rounded border-2 border-gray-200 p-1 mb-4' />
                <label className='aribau text-xs w-full flex font-bold mb-2'>Message</label>
                <textarea name='name' className='w-full rounded border-2 border-gray-200 p-1'></textarea>
            </form>
            <div className='md:w-2/3  md:-mt-44 -mt-0 w-full bg-slate-200 text-center'>
            <h3 className='ttf text-black xl:text-xl  text-lg font-black mb-3'>How can we help?</h3>
            <p className='aribau text-black md:text-lg text-sm'>Please fill out our contact form if you have any
             questions, Thank you.</p>
                </div>
                </div>
      </div>
      <Footer />
      </div>
  );
}