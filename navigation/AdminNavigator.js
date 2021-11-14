import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserProductsScreen, {
    screenOptions as userProductsScreenOptions
} from '../screens/user/UserProductsScreen';
import EditProductScreen, {
    screenOptions as editProductScreenOptions
} from '../screens/user/EditProductScreen';

import stackNavOptions from '../constants/stackNavOptions';

const Stack = createNativeStackNavigator();

const AdminNavigator = () => (
    <Stack.Navigator screenOptions={stackNavOptions}>
        <Stack.Screen
            name="UserProducts"
            component={UserProductsScreen}
            options={userProductsScreenOptions}
        />
        <Stack.Screen
            name="EditProduct"
            component={EditProductScreen}
            options={editProductScreenOptions}
        />
    </Stack.Navigator>
);

export const navigatorOptions = {
    title: 'Admin',
    drawerIcon: ({ size, color }) => (
        <Ionicons
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={size}
            color={color}
        />
    )
};

export default AdminNavigator;
