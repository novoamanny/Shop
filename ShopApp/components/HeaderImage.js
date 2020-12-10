import React from 'react';

import {View, Image, StyleSheet} from 'react-native'

const HeaderImage = () =>{
    return(
        <View>
            <Image style={styles.logo} source={require('../images/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 55,
        height: 42
    }
})


export default HeaderImage;