import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At FOREVER, we believe fashion is more than just clothing—it’s a statement of who you are. Our mission is to bring you the latest trends, timeless styles, and high-quality fashion at prices you'll love. Whether you're dressing up for a special occasion or looking for everyday essentials, we’ve got you covered.</p>
          <p>🌟 Why Shop with FOREVER?</p>
          <p>✔ Curated Collections – Trendy, stylish, and always fresh.</p>
          <p>✔ Seamless Shopping – A smooth experience, from browsing to checkout.</p>
          <p>✔ Affordable Luxury – High-quality fashion without the high price tag.</p>
          <p>✔ Customer First – Your style, your comfort, your satisfaction.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At FOREVER, our mission is simple: to make fashion accessible, stylish, and effortless for everyone. We believe that style is a form of self-expression, and everyone deserves to look and feel their best without compromising on quality or affordability. We’re here to empower you to express yourself through fashion that is bold, timeless, and uniquely you—because style should be forever!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We believe in premium fashion without compromise. Every piece is crafted with high-quality fabrics, attention to detail, and durability—so you can enjoy style that lasts.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shop anytime, anywhere! Our user-friendly website & app make browsing, ordering, and tracking effortless. Plus, with fast shipping & easy returns, fashion has never been this convenient.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Your satisfaction is our priority! Our dedicated support team is always ready to assist you—whether you need styling advice, order updates, or hassle-free returns.</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
