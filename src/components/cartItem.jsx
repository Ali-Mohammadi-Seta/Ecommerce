import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {IoMdClose, IoMdRemove, IoMdAdd} from "react-icons/io";
import {CartContext} from "../contexts/cartContext.jsx";

const CartItem = ({item}) => {

    const {id, image, category, title, price, amount} = item

    const {removeFromCart , increaseAmount , decreaseAmount} = useContext(CartContext)


    return (
        <div className='w-full mb-10'>
            <div className='flex items-center'>
                <Link to={`/product/${id}`} target="_blank">
                    <img className='max-w-[80px] m-2' src={image} alt='/'/>
                </Link>

                <div className='w-full flex justify-between'>
                    <div>
                        <Link to={`/product/${id}`} target="_blank"
                              className="font-bold text-current uppercase hover:underline">{title}</Link>
                    </div>
                    <div onClick={()=>removeFromCart(id)}>
                        <IoMdClose className='hover:text-red-500 cursor-pointer transition'  size={20}/>
                    </div>
                </div>
            </div>
            <div className='bg-amber-900/95 flex gap-x-2 h-10 items-center'>
                <div className='flex justify-between items-center border-r border-amber-800 '>
                    <div className='mx-2 cursor-pointer hover:text-red-500' onClick={()=>decreaseAmount(id)} >
                        <IoMdRemove/>
                    </div>
                    <div className='font-bold '>
                        {amount}
                    </div>
                    <div className='mx-2 cursor-pointer hover:text-green-500' onClick={()=>increaseAmount(id)}>
                        <IoMdAdd/>
                    </div>
                </div>
                <div className='flex-1 flex justify-between '>
                    <div>$ {price}</div>
                    <div className='font-bold pr-2'>{`$ ${(amount * price).toFixed(2)}`}</div>
                </div>
            </div>
        </div>
    )
}
export default CartItem;
