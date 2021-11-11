import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';
import colors from '../../constants/colors';

const CustomHeaderButton = ({ ...props }) => {
    return (
        <HeaderButton
            IconComponent={Ionicons}
            iconSize={24}
            color={Platform.OS === 'android' ? 'white' : colors.primary}
            {...props}
        />
    );
};

export default CustomHeaderButton;
