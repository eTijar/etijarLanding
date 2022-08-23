import Link from 'next/link';
import Head from 'next/head'

export default function FeaturesComp() {
    const featureData = [
        {
            key:1,
            img: '/accounting.png',
            heading:'Manage your employees',
            text:'Create employee profiles and up- your staff records in minutes, when-ever you want, wherever you are.'
        },
        {
            key:2,
            img: '/inventory.png',
            heading:'Inventory and invoice',
            text:'Create invoices and manage your inventory on the go—know how much goods you have left and issue invoices with ease.'
        },
        {
            key:3,
            img: '/salary.png',
            heading:'Schedule Payment',
            text:'We make it super easy for businesses to set up recurring payments or standing orders.'
        },
        {
            key:4,
            img: '/patternLock.png',
            heading:'Seamless business transactions',
            text:'Create and send invoices and manage your income straight from the app. We wll notify you when you get paid and automatically match the payment to your invoice.'
        },
        {
            key:5,
            img: '/money.png',
            heading:'Payment notifications and updates',
            text:'You will instantly receive an email once an invoice has been paid, and the payment status will automatically update your accounting software.'
        },
        {
            key:6,
            img: '/customer.png',
            heading:'Real-time customer communication',
            text:'You and your customer can leave comments or ask questions on the invoice and you wll both receive an email instantly.'
        },
        {
            key:7,
            img: '/easy.png',
            heading:'Payments with less hassle.',
            text:'Are you a Freelancer who wants to be paid remotely for the services you offer? Whatever your business, from Instagram Vendors, Hairdressers, Cleaners or Tutors, you can receive card payments from a distance without the need for a POS or online store by using eTijar remote payment tools.'
        },
    ]
    return(
        <div>
            <Head>
        <title>eTijar - Make Profit not Interest</title>
        <meta name="description" content="Etijar is building a banking stack for MSME. We are empowering
        the next generation of businesses, powered by non-interest finance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full bg-white grid md:grid-cols-3 grid-cols-1 grid-rows-3 gap-6 mt-12'>
        { featureData.map( (item) => (
             <div key={item.key} className='border-2 rounded-lg mb-4 p-3'>
             <div className='w-full  mb-3'>
                 <img className='w-16' src={item.img} alt={item.key}/>
             </div>
             <h5 className='ttf text-center text-primary font-bold text-xl mb-3'>{item.heading}</h5>
             <p className='aribau text-black text-sm text-center'>{item.text}</p>
         </div>
        ))}
      </div>
        </div>
    );
}