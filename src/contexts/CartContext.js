import React, {createContext, useState} from "react";

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState(0);

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setTotalCarrinho(totalCarrinho + cartList[indexItem].price)
            setCart(cartList)
            return;
        }
       
        let data = {
            ...newItem,
             amount: 1,
            total: newItem.price
        }
        setTotalCarrinho(totalCarrinho + newItem.price)
        setCart(products => [...products, data]);
        console.log(...cart, data);
        
    }


    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setTotalCarrinho(totalCarrinho - cartList[indexItem].price)
            setCart(cartList);
            return;
        }

        setTotalCarrinho(totalCarrinho - cart[indexItem].price)
        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);

    }



    return(
        <CartContext.Provider
        value={{
            cart, 
            addItemCart,
            removeItemCart,
            totalCarrinho
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;