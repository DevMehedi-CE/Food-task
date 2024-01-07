import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { LuMinusSquare } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart,incrementQty,decrementQty } from "../redux/slices/CartSlice";


const ItemCart = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch()
  return (
    <div className="p-4 flex items-center shadow-lg gap-x-2">
      <img
        className="w-12 h-12"
        src={img}
        alt=""
      />
      <div>
        <div className="flex items-center justify-between">
        <h2 className="font-semibold text-white">{name}</h2>
        <MdDeleteForever 
         onClick={()=>dispatch(removeFromCart({id,name,img,price}))} 
         className='cursor-pointer hover:text-white text-xl' />
        </div>

        <div className="flex items-center  gap-x-6">
          <span className="font-bold text-xl text-white"> $ {price}</span>
          <div className="text-lg flex gap-x-2 items-center">
            <LuMinusSquare 
            onClick={()=> qty > 1 ? dispatch(decrementQty({id})): (qty = 0)}
             className="hover:bg-yellow-800 hover:text-white cursor-pointer " />
            <span className="text-white font-bold"> {qty} </span>
            <FaRegPlusSquare
            onClick={()=> qty >= 1 ? dispatch(incrementQty({id})):( qty = 0)}
            
            className="hover:bg-gray-500 hover:text-white cursor-pointer " />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
