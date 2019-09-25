import React from 'react'
import { Text, TouchableHighlight, StyleSheet} from 'react-native'

const TabBarItem = ({ border, title, selected, setType, type}) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
            styles.item, selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null ]}>
        <Text style={[ styles.itemText, type === title ? styles.bold : null]}>
            {title}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    border: {
    borderLeftWidth: 1,
    borderLeftColor: '#393d3f'
    },
    itemText: {
    color: '#393d3f',
    fontSize: 16
    },
    selected: {
    backgroundColor: '#7a8450'
    },
    bold: {
    fontWeight: 'bold'
    }
    })

export default TabBarItem