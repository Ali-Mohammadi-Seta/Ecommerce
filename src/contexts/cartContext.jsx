import React, {createContext, useContext, useEffect, useState} from 'react'


export const CartContext = createContext()


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)

    const [total, setTotal] = useState(0)


    const addToCart = (product) => {

        const newItem = {...product, amount: 1}

        const cartItem = cart.find((item) => {
            return item.id === product.id
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === product.id) {
                    return {...item, amount: item.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const ClearCart = () => {
        setCart([])
    }

    const increaseAmount = (id) => {
        const item = cart.find((item) => item.id === id);
        if (item) {
            addToCart(item);
        }
    };

    const decreaseAmount = (id) => {
        const newCart = cart.map((item) =>
            item.id === id
                ? {...item, amount: item.amount - 1}
                : item
        ).filter(item => item.amount > 0);
        setCart(newCart);
    };
    useEffect(() => {
        const totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);
        setItemAmount(totalAmount);

        const totalPrice = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
        setTotal(totalPrice.toFixed(2)); // Fix to 2 decimal places
    }, [cart]);



    return (

        <CartContext.Provider
            value={{cart, addToCart, removeFromCart, ClearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
            {children}
        </CartContext.Provider>

    )
}
export default CartProvider






