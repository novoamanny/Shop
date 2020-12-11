import React from 'react';

import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';


const ProductDetailScreen = ({navigation}) =>{
    const data = navigation.getParam('data')

    return(
        <ScrollView style={{flex: 1}}>
            <View >
                <Image style={Dimensions.get('window').width < 600 ? styles.imagePhone : styles.imageTablet} source={{uri: data.item.imageUrl}}/>
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemDescContainerPhone:{
        marginTop: 10
    },
    itemDescPhone:{
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    }

})



export default ProductDetailScreen;