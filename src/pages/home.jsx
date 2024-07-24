import React, {useContext} from 'react'
import {ProductContext} from "../contexts/productContext.jsx";
import Product from '../components/product.jsx'
import Hero from '/src/components/hero.jsx'

const Home = () => {

    const {products} = useContext(ProductContext)

    const filteredProducts = products.filter(item => {
        return (item.category === "men's clothing" || item.category === "women's clothing")
    })


    return (
        <div>
            <Hero />
            <section className='py-16 px-16'>
                <div className=" max-w-[1640px] mx-auto ">
                    <div name='product' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[30px] mx-auto pt-20">
                        {filteredProducts.map((product) =>
                        { return(
                            <Product product={product} key={product.id}/>)})}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
