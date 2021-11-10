import CartItem from '../../models/cartItem';
import { CART_ACTIONS } from '../actions/actionsTypes';

const initialState = {
    items: {},
    totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART: {
            const addedProduct = action.payload;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;
            const existedItem = state.items[addedProduct.id];

            let updatedOrNewCartItem;

            if (existedItem) {
                updatedOrNewCartItem = new CartItem(
                    existedItem.quantity + 1,
                    productPrice,
                    productTitle,
                    existedItem.sum + productPrice
                );
            } else {
                updatedOrNewCartItem = new CartItem(1, productPrice, productTitle, productPrice);
            }

            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: updatedOrNewCartItem
                },
                totalAmount: state.totalAmount + productPrice
            };
        }
    }

    return state;
};

export default cartReducer;
