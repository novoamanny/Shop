import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Button} from 'react-native';

const ProductDisplayRow = ({data, navigation, length}) =>{
    return(
        <TouchableOpacity onPress={ () => console.log('hell0')}>
            {/* <View style={Dimensions.get('window').width < 600 ? styles.LayoutPhone : styles.LayoutTablet, data.index === 0 ? styles.topItem: (data.index === length - 1 ? styles.bottomItem : null)}> */}
            <View style={Dimensions.get('window').width < 600 ? styles.LayoutPhone : styles.LayoutTablet}>
                <Image style={Dimensions.get('window').width < 600 ? styles.imagePhone : styles.imageTablet} source={{uri: data.item.imageUrl}}/>
                <View style={Dimensions.get('window').width < 600 ? styles.sectionPhone : styles.sectionTablet}>
                    <View style={Dimensions.get('window').width < 600 ? styles.sectionOnePhone : styles.sectionOneTablet}>
                    <Text style={Dimensions.get('window').width < 600 ? styles.textPhone : styles.textTablet}>{data.item.title}</Text>
                    <Text style={Dimensions.get('window').width < 600 ? styles.pricePhone : styles.priceTablet}>{`$${data.item.price}`}</Text>
                    </View>
                    
                    <View style={Dimensions.get('window').width < 600 ? styles.buttonsPhone : styles.buttonsTablet}>
                        <Button
                        onPress={null}
                        title="View Details"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        
                        />

                        <Button
                        onPress={null}
                        title="Add To Cart"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        
                        />
                    </View>
                </View>
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
        height: 260,
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
        height: 285,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#2f2f2f',
        shadowRadius: 10,
        shadowOpacity: 0.75,
        
        
    } ,
    // topItem:{
    //     marginTop: 200,
    //     backgroundColor: '#fff',
    //     marginBottom: 8,
    //     alignSelf: 'center',
    //     width: '90%',
    //     height: 300,
    //     flexDirection: 'column',
    //     borderWidth: 1,
    //     borderColor: 'rgba(0,0,0,0.2)',
    //     borderRadius: 10,
    //     shadowOffset: {width: 0, height: 5},
    //     shadowColor: '#2f2f2f',
    //     shadowRadius: 10,
    //     shadowOpacity: 0.75,
    // },
    // bottomItem:{
    //     marginBottom: 200,
    //     backgroundColor: '#fff',
    //     marginTop: 8,
    //     alignSelf: 'center',
    //     width: '90%',
    //     height: 300,
    //     flexDirection: 'column',
    //     borderWidth: 1,
    //     borderColor: 'rgba(0,0,0,0.2)',
    //     borderRadius: 10,
    //     shadowOffset: {width: 0, height: 5},
    //     shadowColor: '#2f2f2f',
    //     shadowRadius: 10,
    //     shadowOpacity: 0.75,
    // },
    sectionTablet:{
        flex: 1,
        
        
    },
    sectionPhone:{

    },
    sectionOnePhone:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal: 20,
        height: '35%'
        
    },
   
    sectionOneTablet:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
        height: '80%'
        
    },
    buttonsPhone:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },

    buttonsTablet:{
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
        
    },
    
    textPhone:{
        color: '#2f2f2f',
        fontWeight: 'bold',
       
        fontSize: 17
        
    },
    textTablet:{
        color: '#2f2f2f',
        fontWeight: 'bold',
        fontSize: 18
    },
    pricePhone:{
        color: 'blue',
        fontWeight: 'bold',
        
        fontSize: 17
        
    },
    priceTablet:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
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