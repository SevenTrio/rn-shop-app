import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';

const UserProductsScreen = () => {
    const userProducts = useSelector((state) => state.products.userProducts);

    return (
        <FlatList
            data={userProducts}
            renderItem={(itemData) => (
                <ProductItem product={itemData.item} />
            )}
        />
    );
};

export const screenOptions = ({ navigation }) => ({
    title: 'Your Products',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
});

export default UserProductsScreen;
