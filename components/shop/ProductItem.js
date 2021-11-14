import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet
} from 'react-native';

import Card from '../UI/Card';

const ProductItem = ({ product, onSelect, children }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.productItem}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: product.imageUrl }}
                            />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{product.title}</Text>
                            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            {children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    productItem: {
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20
    },
    title: {
        marginVertical: 4,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20
    }
});

export default ProductItem;
