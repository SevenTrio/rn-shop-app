import { ORDERS_ACTIONS } from './actionsTypes';

export const addOrder = (cartItems, totalAmount) => {
    return {
        type: ORDERS_ACTIONS.ADD_ORDER,
        payload: {
            items: cartItems,
            amount: totalAmount
        }
    };
};
