import PRODUCTS from '../../data/dummy-data';
import { PRODUCT_ACTIONS } from '../actions/actionsTypes';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((p) => p.ownerId === 'u1')
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
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
