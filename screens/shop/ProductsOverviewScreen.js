import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Button, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { addToCart } from '../../store/actions/cartActions';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import colors from '../../constants/colors';

const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector((state) => state.products.availableProducts);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    };

    const viewDetailsHandler = (product) => {
        navigation.navigate('ProductDetail', {
            productId: product.id,
            productTitle: product.title
        });
    };

    return (
        <FlatList
            data={products}
            renderItem={(itemData) => (
                <ProductItem
                    product={itemData.item}
                    onSelect={() => viewDetailsHandler(itemData.item)}
                >
                    <Button
                        color={colors.primary}
                        title="View Details"
                        onPress={() => viewDetailsHandler(itemData.item)}
                    />
                    <Button
                        color={colors.primary}
                        title="To Cart"
                        onPress={() => addToCartHandler(itemData.item)}
                    />
                </ProductItem>
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
