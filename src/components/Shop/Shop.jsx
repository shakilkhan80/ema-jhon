import 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const  saveCart =[];
        // step 1 get the id
        for (const id in storedCart) {
            // step 2 get the product using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3 get the quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4 set the added product to save cart
                saveCart.push(addedProduct)
            }

        }
        // step 5 set the save cart to the setCart
        setCart(saveCart)
    }, [products])
    
    const handleAddToCart = (product) => {

        // const newState = [...cart, product];
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity +1;
            const remmining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remmining, exists]
        }

        setCart(newCart);
        addToDb(product.id)
    }
    

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;