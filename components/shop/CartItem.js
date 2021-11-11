import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ product, onRemove }) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{product.quantity} </Text>
                <Text style={styles.mainText}>{product.productTitle}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={{ ...styles.mainText, ...styles.amount }}>
                    {product.sum.toFixed(2)}
                </Text>
                <TouchableOpacity
                    onPress={onRemove}
                    style={styles.deleteButton}
                >
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={24}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        marginRight: 4,
        color: '#888',
        fontSize: 16,
        fontFamily: 'open-sans'
    },
    mainText: {
        fontSize: 16,
        fontFamily: 'open-sans-bold'
    },
    amount: {
        marginRight: 6
    },
    deleteButton: {}
});

export default CartItem;
