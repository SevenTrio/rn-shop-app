import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((p) => p.ownerId === 'u1')
};

const productsReducer = (state = initialState) => state;

export default productsReducer;
