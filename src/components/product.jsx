import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BsPlus, BsEyeFill} from "react-icons/bs";
import {CartContext} from "../contexts/cartContext.jsx";


const Product = ({product}) => {

    const {addToCart} = useContext(CartContext)

    const {id, image, category, title, price} = product

    return (
        <div>
            <div className='border rounded h-[350px] mb-4 relative overflow-hidden group transition'>
                <div name='image' className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto '>
                        <img className='max-h-[220px] mx-auto group-hover:scale-110 transition duration-300' src={image}
                             alt='/'/>
                    </div>

                    <div className='absolute top-1 right-1 flex'>
                        <div name="button"
                             className='btn  p-2  items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100'>
                            <button onClick={() => addToCart(product)}>
                                <div className=' ' >
                                    <BsPlus size={30}/>
                                </div>
                            </button>
                        </div>
                        <div>
                            <Link to={`/product/${id}`}  target="_blank"
                                  className='btn  opacity-0 group-hover:opacity-100'>
                                <BsEyeFill/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div name="name" className="mb-1">
                <div>
                    <h1 className='text-gray-400 capitalize'>{category}</h1>
                </div>
                <div>
                    <Link to={`/product/${id}`}>
                        <p className='font-bold '>{title}</p>
                    </Link>
                </div>
                <div>
                    <h1 className="font-bold">$ {price}</h1>
                </div>
            </div>
        </div>
    )
}
export default Product
