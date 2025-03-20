import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LastestCollection = () => {

  const { products} = useContext(ShopContext);
  const [lastestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Step into style with our newest collection! From chic everyday essentials to bold statement pieces, our latest arrivals are designed to keep you ahead of the fashion curve. Crafted with premium fabrics and trend-setting designs, each piece is made to elevate your wardrobe effortlessly.
        </p>
      </div>
      
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          lastestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }

      </div>

    </div>
  )
}

export default LastestCollection
