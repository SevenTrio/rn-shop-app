import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsNavigator, {
    navigatorOptions as productsNavOptions
} from './ProductsNavigator';
import OrdersNavigator, {
    navigatorOptions as ordersNavOptions
} from './OrdersNavigator';
import AdminNavigator, {
    navigatorOptions as adminNavOptions
} from './AdminNavigator';

import drawerNavOptions from '../constants/drawerNavOptions';

const Drawer = createDrawerNavigator();

const ShopNavigator = () => (
    <Drawer.Navigator screenOptions={drawerNavOptions}>
        <Drawer.Screen
            name="ProductsNavigator"
            component={ProductsNavigator}
            options={productsNavOptions}
        />
        <Drawer.Screen
            name="OrdersNavigator"
            component={OrdersNavigator}
            options={ordersNavOptions}
        />
        <Drawer.Screen
            name="AdminNavigator"
            component={AdminNavigator}
            options={adminNavOptions}
        />
    </Drawer.Navigator>
);

export default ShopNavigator;
