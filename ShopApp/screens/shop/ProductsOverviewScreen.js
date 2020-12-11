import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {getRates, getProducts} from '../../store/actions/products';

import ProductDisplayRow from '../../components/ProductDisplayRow';
import HeaderImage from '../../components/HeaderImage';


const ProductsOverviewScreen = ({getRates, getProducts, products:{availableProducts}, navigation}) =>{

    useEffect(() =>{
        getProducts()
    }, [getProducts])

    const renderDataHandle = (itemData) =>{
        const length = availableProducts.length;
        return <ProductDisplayRow data={itemData} navigation={navigation} length={length}/>
        
    }

    return(
        <View style={styles.Layout}>
            <View >
            {availableProducts && <FlatList data={availableProducts} renderItem={renderDataHandle}/>}
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        flex: 1,
        
        
        backgroundColor: '#fff',
        
    },
    
})



ProductsOverviewScreen.propTypes = {
    getRates: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    products: state.products
})

export default connect(mapStateToProps, {getRates, getProducts})(ProductsOverviewScreen);