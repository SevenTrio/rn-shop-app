import { PRODUCT_ACTIONS } from './actionsTypes';

export const deleteProduct = (productId) => {
    return {
        type: PRODUCT_ACTIONS.DELETE_PRODUCT,
        payload: productId
    };
};

export const createProduct = (title, imageUrl, price, description) => {
    return {
        type: PRODUCT_ACTIONS.CREATE_PRODUCT,
        payload: {
            title,
            imageUrl,
            price,
            description
        }
    };
};

export const updateProduct = (id, title, imageUrl, description) => {
    return {
        type: PRODUCT_ACTIONS.UPDATE_PRODUCT,
        payload: {
            id,
            title,
            imageUrl,
            description
        }
    };
};
