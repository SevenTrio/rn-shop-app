import { ORDERS_ACTIONS } from '../actions/actionsTypes';
import Order from '../../models/order';

const initialState = {
    orders: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_ACTIONS.ADD_ORDER: {
            const orderData = action.payload;
            const newOrder = new Order(
                new Date().toString(),
                orderData.items,
                orderData.amount,
                new Date()
            );

            return {
                ...state,
                orders: [...state.orders, newOrder]
            };
        }
    }

    return state;
};

export default ordersReducer;
