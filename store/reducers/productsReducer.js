import PRODUCTS from '../../data/dummy-data';
import { PRODUCT_ACTIONS } from '../actions/actionsTypes';
import Product from '../../models/product';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((p) => p.ownerId === 'u1')
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ACTIONS.CREATE_PRODUCT: {
            const productData = action.payload;
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                productData.title,
                productData.imageUrl,
                productData.description,
                Number.parseInt(productData.price, 10)
            );

            return {
                ...state,
                userProducts: [...state.userProducts, newProduct],
                availableProducts: [...state.availableProducts, newProduct]
            };
        }
        case PRODUCT_ACTIONS.UPDATE_PRODUCT: {
            const productData = action.payload;
            const productIndex = state.userProducts.findIndex(
                (product) => product.id === productData.id
            );
            const availableProductIndex = state.availableProducts.findIndex(
                (product) => product.id === productData.id
            );

            const updatedProduct = new Product(
                productData.id,
                state.userProducts[productIndex].ownerId,
                productData.title,
                productData.imageUrl,
                productData.description,
                state.userProducts[productIndex].price
            );

            const updatedUserProducts = [...state.userProducts];
            updatedUserProducts[productIndex] = updatedProduct;

            const updatedAvailableProducts = [...state.availableProducts];
            updatedAvailableProducts[availableProductIndex] = updatedProduct;

            return {
                ...state,
                userProducts: updatedUserProducts,
                availableProducts: updatedAvailableProducts
            };
        }
        case PRODUCT_ACTIONS.DELETE_PRODUCT: {
            const deletedProductId = action.payload;

            return {
                ...state,
                availableProducts: state.availableProducts.filter(
                    (product) => product.id !== deletedProductId
                ),
                userProducts: state.userProducts.filter(
                    (product) => product.id !== deletedProductId
                )
            };
        }
    }

    return state;
};

export default productsReducer;
