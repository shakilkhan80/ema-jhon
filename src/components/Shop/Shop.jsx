import 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products 
                        key={product.id}
                        product={product}
                        >
                        </Products>)
                }
            </div>
            <div>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;