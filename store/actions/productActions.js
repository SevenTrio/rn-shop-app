import { PRODUCT_ACTIONS } from './actionsTypes';

export const deleteProduct = (productId) => {
    return {
        type: PRODUCT_ACTIONS.DELETE_PRODUCT,
        payload: productId
    };
};
