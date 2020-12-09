import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, Text} from 'react-native';

import {connect} from 'react-redux';
import PropTypes from 'prop-types'

import {getRates} from '../../store/actions/products';

const ProductsOverviewScreen = ({getRates, products:{availableProducts}}) =>{

    useEffect(() =>{
        
    }, [])

    return(
        <View>
            <Text>Hello</Text>
            
        </View>
    )
}
//
ProductsOverviewScreen.propTypes = {
    getRates: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    products: state.products
})

export default connect(mapStateToProps, {getRates})(ProductsOverviewScreen);