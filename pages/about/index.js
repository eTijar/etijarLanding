import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'

export default function About() {
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
      <div className='w-full bg-white 2xl:px-72 xl:px-16 px-10 md:pt-24 pt-14'>
      <h3 className='ttf text-primary xl:text-6xl md:text-5xl sm:text-5xl text-4xl font-black text-center'>About Us</h3> <br /><br />
      <p className='aribau text-secondary md:text-xl text-lg font-black mb-2 text-center'>What we&apos;re doing</p>
      <p className='aribau text-black font-bold md:text-xl text-sm text-center md:mt-16 mt-10'>Etijar is building a banking stack for MSME. We are empowering the next generation of businesses,
       powered by non-interest finance. Using alternative data and business finance management tools in place of credit 
      history, users can qualify for non-interest business financing in a way that is user-friendly and customer-focused.
      <br /> <br />Founded in 2021, Etijar builds technology that enables non-interest, halal financial services, including microfinance 
      and savings products to financially underserved/excluded entrepreneurs in Africa.
      <br /> <br /> Make profit, not interest…</p>
        </div>

      <Footer />
      </div>
  );
}