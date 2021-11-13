import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrdersScreen, {
    screenOptions as ordersScreenOptions
} from '../screens/shop/OrdersScreen';

import stackNavOptions from '../constants/stackNavOptions';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => (
    <Stack.Navigator screenOptions={stackNavOptions}>
        <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={ordersScreenOptions}
        />
    </Stack.Navigator>
);

export const navigatorOptions = {
    title: 'Orders',
    drawerIcon: ({ size, color }) => (
        <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={size}
            color={color}
        />
    )
};

export default OrdersNavigator;
