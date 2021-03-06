import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromCart } from '../../store/actions/cartActions';
import { addOrder } from '../../store/actions/ordersActions';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import colors from '../../constants/colors';

const CartScreen = () => {
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const cartItems = useSelector((state) => {
        const transformedCartItems = [];

        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                ...state.cart.items[key]
            });
        }

        return transformedCartItems;
    });
    const dispatch = useDispatch();

    const removeItemHandler = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const orderHandler = () => {
        dispatch(addOrder(cartItems, cartTotalAmount));
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${(Math.round(cartTotalAmount * 100) / 100).toFixed(2)}</Text>
                </Text>
                <Button
                    color={colors.accent}
                    title="Order Now"
                    onPress={orderHandler}
                    disabled={cartItems.length === 0}
                />
            </Card>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.productId}
                renderItem={(itemData) => (
                    <CartItem
                        item={itemData.item}
                        onRemove={() => removeItemHandler(itemData.item.productId)}
                        deletable
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    );
};

export const screenOptions = {
    title: 'Your Cart'
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: colors.primary
    }
});

export default CartScreen;
