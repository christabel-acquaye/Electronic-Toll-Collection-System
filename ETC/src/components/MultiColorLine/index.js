import React from 'react'
import {View} from 'react-native'

export default (props) => (
    <View style={{
        height: 5,
        flexDirection: 'row',
    }}>
        <View style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#7D00FF',
            borderTopStartRadius: props.radius || 0,
        }}/>
        <View style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#6B37FF'
        }}/>
        <View style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#3B7FFF'
        }}/>
        <View style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#00CEE3',
            borderTopEndRadius: props.radius || 0
        }}/>
    </View>
)

