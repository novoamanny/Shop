import React from 'react';

import {View, Text, Image, StyleSheet, Dimensions, ScrollView, Button} from 'react-native';


const ProductDetailScreen = ({navigation}) =>{
    const data = navigation.getParam('data')

    return(
        <ScrollView style={{flex: 1}}>
            <View >
                <Image style={Dimensions.get('window').width < 600 ? styles.imagePhone : styles.imageTablet} source={{uri: data.item.imageUrl}}/>
            </View>
            <View style={Dimensions.get('window').width < 600 ? styles.cartBTNContainerPhone : null}>
                <Button
                    onPress={() => console.log('Added')}
                    title="Add To Cart"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    
                    />
            </View>
            <View style={Dimensions.get('window').width < 600 ? styles.itemPriceContainerPhone : null}>
                <Text style={Dimensions.get('window').width < 600 ? styles.itemPricePhone : null}>{`$${data.item.price}`}</Text>
            </View>
            <View style={Dimensions.get('window').width < 600 ? styles.itemTitleContainerPhone : null}>
                <Text style={Dimensions.get('window').width < 600 ? styles.itemTitlePhone : null}>{data.item.title}</Text>
            </View>
            <View style={Dimensions.get('window').width < 600 ? styles.itemDescContainerPhone : null}>
                <Text style={Dimensions.get('window').width < 600 ? styles.itemDescPhone : null}>{data.item.description}</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imagePhone:{
        width: '100%',
        height: 300
    },
    imageTablet:{
        width: '80%',
        height: 450,
        alignSelf: 'center',
        marginTop: 10
    },
    itemTitleContainerPhone:{
        marginTop: 10
    },
    itemTitlePhone:{
        fontSize: Dimensions.get('window').width < 400 ? 16 : 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemDescContainerPhone:{
        marginTop: 10
    },
    itemDescPhone:{
        fontSize: Dimensions.get('window').width < 400 ? 14 : 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    cartBTNContainerPhone:{
        marginTop: 20
    },
    cartBTNPhone:{
        fontSize: 30
    },
    itemPriceContainerPhone:{
        marginVertical: Dimensions.get('window').width < 400 ? 40 : 50
    },
    itemPricePhone:{
        textAlign: 'center',
        fontSize: Dimensions.get('window').width < 400 ? 30: 40,
        fontWeight: '500',
        color: 'blue'
    }


})



export default ProductDetailScreen;