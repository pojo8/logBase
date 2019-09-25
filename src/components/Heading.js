import React from 'react'
import {View, Text, StyleSheet,ImageBackground } from 'react-native'


const Heading = () => (    
    <View style={styles.header}>
        <Text style={styles.headerText}>
            log Base
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: 60
    },
    container: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#ECEFF1',
      },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: '#234584',
        fontWeight: '100'
    }
})

export default Heading