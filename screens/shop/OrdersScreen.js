import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import OrderItem from '../../components/shop/OrderItem';
import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = () => {
    const orders = useSelector((state) => state.orders.orders);

    return (
        <FlatList
            data={orders}
            renderItem={(itemData) => (
                <OrderItem order={itemData.item} />
            )}
        />
    );
};

export const screenOptions = ({ navigation }) => ({
    title: 'Your Orders',
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

export default OrdersScreen;
