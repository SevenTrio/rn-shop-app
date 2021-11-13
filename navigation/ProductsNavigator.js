import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsOverviewScreen, {
    screenOptions as productsOverviewScreenOptions
} from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, {
    screenOptions as productDetailScreenOptions
} from '../screens/shop/ProductDetailScreen';
import CartScreen, {
    screenOptions as cartScreenOptions
} from '../screens/shop/CartScreen';

import stackNavOptions from '../constants/stackNavOptions';

const Stack = createNativeStackNavigator();

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

export const navigatorOptions = {
    title: 'Products',
    drawerIcon: ({ size, color }) => (
        <Ionicons
            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            size={size}
            color={color}
        />
    )
};

export default ProductsNavigator;
