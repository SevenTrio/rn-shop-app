import React from 'react';
import { FlatList, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { deleteProduct } from '../../store/actions/productActions';
import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from '../../components/UI/HeaderButton';
import colors from '../../constants/colors';

const UserProductsScreen = () => {
    const userProducts = useSelector((state) => state.products.userProducts);
    const dispatch = useDispatch();

    const deleteProductHandler = (productId) => {
        dispatch(deleteProduct(productId));
    };

    return (
        <FlatList
            data={userProducts}
            renderItem={(itemData) => (
                <ProductItem
                    product={itemData.item}
                    onSelect={() => {}}
                >
                    <Button
                        color={colors.primary}
                        title="Edit"
                        onPress={() => {}}
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
    )
});

export default UserProductsScreen;
