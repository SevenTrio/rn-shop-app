import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { addToCart } from '../../store/actions/cartActions';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';

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

export const screenOptions = ({ navigation }) => ({
    title: 'All products',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => navigation.navigate('Cart')}
            />
        </HeaderButtons>
    )
});

export default ProductsOverviewScreen;
