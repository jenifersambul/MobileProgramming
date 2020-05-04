import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'royalblue'
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'darkblue'
    },
    box3: {
        width: 150,
        height: 150,
        backgroundColor: 'lightblue'
    }
})

export default Layout;