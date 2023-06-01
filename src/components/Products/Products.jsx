import 'react';
import './Products.css'

const Products = (props) => {
    const { name, img, seller, price, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='products-name'>{name}</h6>
                <p>Price: {price}</p>
                <p><small>Manufucturer: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Products;