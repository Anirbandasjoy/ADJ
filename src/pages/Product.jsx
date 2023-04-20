import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { title } = useParams()
  // const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const products = await response.json();
      const AllProducts = products.products
      const singleProduct = AllProducts.filter((pro) => pro.title == title);
      setProduct(singleProduct);
    };

    fetchData();
  }, []);
  return (
    <div className='p-16 mt-14 bg-gray-800'>
      {
        product.map((pro) => {
          return <div className='flex gap-14 bg-slate-500 p-10 rounded-sm '>
            <div>
              <img className='rounded-md' src={pro.thumbnail} alt={pro.title} />

              <p className="text-gray-900 font-semibold mt-4 text-xl">{pro.category}</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-between items-center'>
                <h1 className='w-[45%] h-[1px] bg-slate-900'></h1>
                <h1 className='px-5 text-[2rem] text-center font-bold'>{pro.brand}</h1>
                <h1 className='w-[45%] h-[1px] bg-slate-900'></h1>
              </div>
              <h1 className='text-[1.3rem] mt-8 '>{pro.title}</h1>
              <p className='text-sm mt-3'>{pro.description}</p>
              <p className=' text-gray-700 text-[2rem]  '> <span className="text-gray-900 font-bold text-xl">
                ${pro.price}
              </span> <span className='text-[10px] text-gray-900 line-through'> ${pro.discountPercentage}</span> </p>

              <p className='mt-12 text-center bg-slate-600 p-2 hover:bg-gray-900 hover:text-yellow-100 rounded-full'>Add to card</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Product