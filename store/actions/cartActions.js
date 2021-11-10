import { CART_ACTIONS } from './actionsTypes';

export const addToCart = (product) => {
    return {
        type: CART_ACTIONS.ADD_TO_CART,
        payload: product
    };
};
