import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/slices/CartSlice'

const FoodCard = ({id,name,price,rating,desc, img}) => {
  const dispatch = useDispatch();
  return (
   
         <div className='font-bold w-64 bg-white p-5 flex flex-col rounded-lg lg:mt-40 mt-10 '>
        <img className='w-auto h-32 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />

        <div className='my-4'>
        <h2>{name}</h2>
        <span>${price} / each</span>
        </div>
        <p className='font-medium text-gray-500 leading-none '>{desc.slice(0,50)}</p>
        <div className=' mt-5 ' >
           
            <button
            onClick={()=>dispatch(addToCart({id,name,img,price,rating,qty:1}))}
             className='py-1 px-2 text-white bg-orange-600 hover:bg-gray-600 rounded-lg text-sm w-full'>Add to Order</button>
             <button className='py-1 px-2 text-orange-600 border border-orange-500 mt-2 hover:bg-gray-600 rounded-lg text-sm w-full'>Customize</button>
        </div>
        
    
    </div>
  )
}

export default FoodCard