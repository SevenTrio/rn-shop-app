import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ style, children }) => {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
    }
});

export default Card;
