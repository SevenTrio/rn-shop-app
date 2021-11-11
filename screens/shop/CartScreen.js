import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CartItem from '../../components/shop/CartItem';
import colors from '../../constants/colors';

const CartScreen = () => {
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const cartItems = useSelector((state) => {
        const transformedCartItems = [];

        for (const key in state.cart.items) {
            transformedCartItems.push({
                id: key,
                ...state.cart.items[key]
            });
        }

        return transformedCartItems;
    });

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Title: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button
                    color={colors.accent}
                    title="Order Now"
                    disabled={cartItems.length === 0}
                />
            </View>
            <FlatList
                data={cartItems}
                renderItem={(itemData) => (
                    <CartItem product={itemData.item} onRemove={() => {}} />
                )}
            />
        </View>
    );
};

export const screenOptions = {
    title: 'Cart'
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
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        elevation: 5
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
