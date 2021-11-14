import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Card from '../UI/Card';
import CartItem from './CartItem';
import colors from '../../constants/colors';

const OrderItem = ({ order }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleShowDetails = () => {
        setShowDetails((prevState) => !prevState);
    };

    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${order.totalAmount.toFixed(2)}</Text>
                <Text style={styles.date}>{order.readableDate}</Text>
            </View>
            <Button
                color={colors.primary}
                title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={toggleShowDetails}
            />
            {showDetails && (
                <View style={styles.orderDetails}>
                    {order.items.map((cartItem) => (
                        <CartItem key={cartItem.productId} item={cartItem} />
                    ))}
                </View>
            )}
        </Card>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        alignItems: 'center',
        margin: 20,
        padding: 10
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontSize: 16,
        fontFamily: 'open-sans-bold'
    },
    date: {
        color: '#888',
        fontSize: 16,
        fontFamily: 'open-sans'
    },
    orderDetails: {
        width: '100%'
    }
});

export default OrderItem;
