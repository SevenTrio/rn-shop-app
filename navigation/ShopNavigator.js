import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen, {
    screenOptions as productsOverviewScreenOptions
} from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, {
    screenOptions as productDetailScreenOptions
} from '../screens/shop/ProductDetailScreen';
import CartScreen, {
    screenOptions as cartScreenOptions
} from '../screens/shop/CartScreen';
import OrdersScreen, {
    screenOptions as ordersScreenOptions
} from '../screens/shop/OrdersScreen';

import stackNavOptions from '../constants/stackNavOptions';
import drawerNavOptions from '../constants/drawerNavOptions';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ProductsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackNavOptions}>
            <Stack.Screen
                name="ProductsOverview"
                component={ProductsOverviewScreen}
                options={productsOverviewScreenOptions}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={productDetailScreenOptions}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={cartScreenOptions}
            />
        </Stack.Navigator>
    );
};

const OrdersNavigator = () => (
    <Stack.Navigator screenOptions={stackNavOptions}>
        <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={ordersScreenOptions}
        />
    </Stack.Navigator>
);

const ShopNavigator = () => (
    <Drawer.Navigator screenOptions={drawerNavOptions}>
        <Drawer.Screen
            name="ProductsNavigator"
            component={ProductsNavigator}
            options={{
                title: 'Products',
                drawerIcon: ({ size, color }) => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                        size={size}
                        color={color}
                    />
                )
            }}
        />
        <Drawer.Screen
            name="OrdersNavigator"
            component={OrdersNavigator}
            options={{
                title: 'Orders',
                drawerIcon: ({ size, color }) => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                        size={size}
                        color={color}
                    />
                )
            }}
        />
    </Drawer.Navigator>
);

export default ShopNavigator;
