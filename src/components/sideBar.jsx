import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {IoMdArrowBack} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import CartItem from "./cartItem.jsx";
import {SideBarContext} from "../contexts/sideBarContext.jsx";
import {CartContext} from "../contexts/cartContext.jsx";

const SideBar = () => {

    const {cart, ClearCart, total} = useContext(CartContext)
    const {isOpen, handleClose} = useContext(SideBarContext)


    return (
        <div
            className={isOpen ? 'shadow-black shadow-2xl w-screen md:w-[450px] bg-current fixed h-screen z-50 top-0 left-0 duration-300' : 'w-screen md:w-[450px] fixed h-screen z-50 top-0 left-[-100%] duration-300'}>
            <div className='flex justify-between items-center py-6  border-gray-500 text-white p-2 border-b   '>
                <div>
                    <h className='font-bold capitalize text-sm md:text-xl'>Shopping Cart (0)</h>

                </div>
                <div className='cursor-pointer' onClick={handleClose}>
                    <IoMdArrowBack size={25}/>

                </div>

            </div>
            <div className='p-2 text-gray-300'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id}/>
                })}
            </div>

            <div className=' py-6'>
                <div className='flex w-full justify-between items-center'>
                    <div className='text-gray-300 font-bold mx-2'>
                        <span>Total :</span> $ {total}
                    </div>
                    <div
                        className='text-gray-300 font-bold w-8 h-8 flex justify-center items-center cursor-pointer py-4'
                        onClick={ClearCart}>
                        <FiTrash2 className='hover:text-red-700' size={25}/>
                    </div>

                </div>
            </div>
<div className='pt-4'>
                <div className='text-gray-300 flex flex-col justify-between mx-2 p-2 items-center  '>
                    <Link className=' btn hover:font-bold pb-3  text-center pt-2 rounded w-[300px]'>View
                        Cart</Link>
                    <div className='text-gray-300 flex flex-col justify-between mx-2 p-2 items-center '>
                        <Link
                            className=' btn hover:font-bold pb-3  text-center pt-2 rounded w-[300px] '>Checkout</Link>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default SideBar
