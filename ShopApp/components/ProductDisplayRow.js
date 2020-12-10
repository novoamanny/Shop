import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

const ProductDisplayRow = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={ () => console.log('hell0')}>
            <View style={Dimensions.get('window').width < 600 ? styles.LayoutPhone : styles.LayoutTablet}>
                <Image style={Dimensions.get('window').width < 600 ? styles.imagePhone : styles.imageTablet} source={{uri: data.item.imageUrl}}/>
                <Text style={styles.text}>{data.item.title}</Text>
            </View>
            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    LayoutTablet:{
        
        
        backgroundColor: '#fff',
        marginVertical: 10,
        alignSelf: 'center',
        width: '90%',
        height: 300,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        shadowOffset: {width: 0, height: 10},
        shadowColor: '#2f2f2f',
        shadowRadius: 10,
        shadowOpacity: 0.75,
        
    },
    LayoutPhone:{
        
        
        backgroundColor: '#fff',
        marginVertical: 8,
        alignSelf: 'center',
        width: '90%',
        height: 300,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#2f2f2f',
        shadowRadius: 10,
        shadowOpacity: 0.75,
        
        
    } ,
    text:{
        color: 'blue',
        
    },
    imagePhone:{
        
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imageTablet:{
        height: '100%',
        width: '45%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    }
})

export default ProductDisplayRow;