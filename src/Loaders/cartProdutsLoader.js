import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async() => {
    const loddedProducts = await fetch('products.json')
    const products = await loddedProducts.json();
    // if cart in data base have to use async await

    const storedCart = getShoppingCart();
    const saveCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        const quantity = storedCart[id];
        addedProduct.quantity= quantity;
        saveCart.push(addedProduct)
    }
    // if you need to send two things
    // return [products, saveCart]
    // return {products, cart: saveCart}
    return saveCart;
}

export default cartProductsLoader;