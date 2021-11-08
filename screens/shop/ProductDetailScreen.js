import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import colors from '../../constants/colors';

const ProductDetailScreen = ({ route }) => {
    const { productId } = route.params;
    const products = useSelector((state) => state.products.availableProducts);
    const selectedProduct = products.find((prod) => prod.id === productId);

    return (
        <ScrollView style={styles.productDetailScreen}>
            <Image
                style={styles.image}
                source={{ uri: selectedProduct.imageUrl }}
            />
            <View style={styles.actions}>
                <Button
                    color={colors.primary}
                    title="Add to Cart"
                    onPress={() => {
                    }}
                />
            </View>
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

export const screenOptions = ({ route }) => ({
    title: route.params.productTitle
});

const styles = StyleSheet.create({
    productDetailScreen: {},
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        alignItems: 'center',
        marginTop: 20
    },
    price: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: '#888'
    },
    description: {
        marginTop: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'open-sans'
    }
});

export default ProductDetailScreen;
