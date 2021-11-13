import CartItem from '../../models/cartItem';
import { CART_ACTIONS, ORDERS_ACTIONS } from '../actions/actionsTypes';

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
        case CART_ACTIONS.REMOVE_FROM_CART: {
            const productId = action.payload;
            const selectedCartItem = state.items[productId];

            if (!selectedCartItem) return state;

            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;

            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = {
                    ...state.items,
                    [productId]: updatedCartItem
                };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[productId];
            }

            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            };
        }
        case ORDERS_ACTIONS.ADD_ORDER: {
            return initialState;
        }
    }

    return state;
};

export default cartReducer;
