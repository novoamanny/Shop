import React from 'react';

import {View, Text} from 'react-native';


const ProductDetailScreen = ({navigation}) =>{
    const data = navigation.getParam('data')

    return(
        <View>
            <Text>{data.item.title}</Text>
        </View>
    )
}


export default ProductDetailScreen;