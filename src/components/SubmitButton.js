import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const SubmitButton = ({ submitEntry }) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={submitEntry}>
            <Text style={styles.submit}>
                Submit
            </Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#7a8450',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#393d3f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#393d3f',
        fontWeight: '600'
    }
})
export default SubmitButton