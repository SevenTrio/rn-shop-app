import React, {
    useState,
    useCallback,
    useEffect,
    useLayoutEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {
    updateProduct,
    createProduct
} from '../../store/actions/productActions';
import HeaderButton from '../../components/UI/HeaderButton';

const EditProductScreen = ({ navigation, route }) => {
    const productId = route.params?.productId;
    const editedProduct = useSelector(
        (state) => state.products.userProducts.find((p) => p.id === productId)
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: editedProduct ? 'Edit Product' : 'Add Product'
        });
    }, [route]);

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState(editedProduct ? editedProduct.price : '');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    const dispatch = useDispatch();

    const submitHandler = useCallback(() => {
        if (editedProduct) {
            dispatch(updateProduct(editedProduct.id, title, imageUrl, description));
        } else {
            dispatch(createProduct(title, imageUrl, price, description));
        }
        navigation.goBack();
    }, [productId, dispatch, title, imageUrl, price, description]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Save"
                        iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                        onPress={submitHandler}
                    />
                </HeaderButtons>
            )
        });
    }, [submitHandler]);

    return (
        <ScrollView style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
            </View>

            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                    style={styles.input}
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                />
            </View>

            {editedProduct ? null : (
                <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                </View>
            )}

            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
        </ScrollView>
    );
};

export const screenOptions = () => ({});

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        marginVertical: 8,
        fontFamily: 'open-sans-bold'
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default EditProductScreen;
