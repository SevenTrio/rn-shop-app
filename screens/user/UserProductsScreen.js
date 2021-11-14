import React from 'react';
import { FlatList, Button, Alert, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { deleteProduct } from '../../store/actions/productActions';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import colors from '../../constants/colors';

const UserProductsScreen = ({ navigation }) => {
    const userProducts = useSelector((state) => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (productId) => {
        navigation.navigate('EditProduct', {
            productId
        });
    };

    const deleteProductHandler = (productId) => {
        Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
            {
                text: 'No',
                style: 'default'
            },
            {
                text: 'Yes',
                style: 'destructive',
                onPress: () => dispatch(deleteProduct(productId))
            }
        ]);
    };

    return (
        <FlatList
            data={userProducts}
            renderItem={(itemData) => (
                <ProductItem
                    product={itemData.item}
                    onSelect={() => editProductHandler(itemData.item.id)}
                >
                    <Button
                        color={colors.primary}
                        title="Edit"
                        onPress={() => editProductHandler(itemData.item.id)}
                    />
                    <Button
                        color={colors.primary}
                        title="Delete"
                        onPress={() => deleteProductHandler(itemData.item.id)}
                    />
                </ProductItem>
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
    ),
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Add"
                iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                onPress={() => navigation.navigate('EditProduct')}
            />
        </HeaderButtons>
    )
});

export default UserProductsScreen;
