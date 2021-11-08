import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector((state) => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            renderItem={(itemData) => (
                <ProductItem
                    product={itemData.item}
                    onViewDetail={() => navigation.navigate('ProductDetail', {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    })}
                    onAddToCart={() => {}}
                />
            )}
        />
    );
};

export const screenOptions = {
    title: 'All products'
};

export default ProductsOverviewScreen;
