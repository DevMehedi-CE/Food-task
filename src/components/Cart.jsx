import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ItemCart from "./ItemCart";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty,item)=>totalQty + item.qty,0)
  const totalPrice = cartItem.reduce((total,item)=>total+item.qty*item.price,0)

  return (
    <>
      <div
        className={`fixed bg-orange-600 top-0 right-0 lg:w-72 w-full h-full px-4 ${
          activeCart
            ? "translate-x-0"
            : "translate-x-full transition-all duration-500 ease-in-out z-50"
        }`}
      >
        {/* order and close  */}
        <div className="flex  text-white items-center justify-between py-4 font-mono text-xl font-semibold">
          <span>My Order</span>
          <button onClick={() => setActiveCart(!activeCart)}>
            {" "}
            <IoIosCloseCircle className="cursor-pointer hover:text-green-800 text-2xl" />{" "}
          </button>
        </div>

        {/* Item Cart  */}

        { cartItem.length > 0 ?  cartItem.map((food) => (
          <ItemCart key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
          qty={food.qty}
           />
        )) :  <h1 className="text-xl font-bold text-white text-center pt-40" >Your Cart is Empty</h1> } 

        {/* checkOut design  */}
        <div className="bottom-0 absolute font-semibold text-white ">
          <h3>Items :{totalQty} </h3>
          <h3>Total Amount :$ {totalPrice} </h3>
          <hr className="my-2 " />
          <button className="bg-gray-500 font-bold px-3 text-white p-2 rounded-lg w-[90vw] lg:w-[15vw] mb-10 ">
            Checkout
          </button>
        </div>
      </div>

      <button
        onClick={() => setActiveCart(true)}
        className={`text-xl font-bold fixed top-10 right-6 lg:top-10 lg:right-96 bg-orange-500 text-white p-2 rounded-2xl hover:cursor-pointer z-10 ${totalQty > 0 && "animate-bounce delay-700 transition-all"} `}
      >
       
        <BsCart3 />
      </button>
    </>
  );
};

export default Cart;
