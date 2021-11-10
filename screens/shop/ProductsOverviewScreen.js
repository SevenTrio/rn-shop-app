import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';

import { addToCart } from '../../store/actions/cartActions';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector((state) => state.products.availableProducts);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };

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
                    onAddToCart={() => addToCartHandler(itemData.item)}
                />
            )}
        />
    );
};

export const screenOptions = {
    title: 'All products'
};

export default ProductsOverviewScreen;
