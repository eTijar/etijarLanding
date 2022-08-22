import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FeaturesComp from '../../components/featuresComp'
import Link from 'next/link'

export default function Features() {
    
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
      <h3 className='ttf text-primary xl:text-6xl md:text-5xl sm:text-5xl text-4xl font-black text-center'>Feautures</h3> <br />
      <p className='aribau text-secondary md:text-xl text-lg font-black mb-2 text-center'>You can do alot more with our App</p>
      
     {/*features component*/}
     <FeaturesComp />
        </div>

      <Footer />
      </div>
  );
}