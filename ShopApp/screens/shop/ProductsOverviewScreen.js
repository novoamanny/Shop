import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {getRates, getProducts} from '../../store/actions/products';

import ProductDisplayRow from '../../components/ProductDisplayRow'


const ProductsOverviewScreen = ({getRates, getProducts, products:{availableProducts}, navigation}) =>{

    useEffect(() =>{
        getProducts()
    }, [getProducts])

    const renderDataHandle = (itemData) =>{
        return <ProductDisplayRow data={itemData} navigation={navigation}/>
    }

    return(
        <View style={styles.Layout}>
            
            {availableProducts && <FlatList data={availableProducts} renderItem={renderDataHandle}/>}
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    Layout:{
        flex: 1,
        
        
        backgroundColor: '#fff',
        
    }
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