import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import EntryButton from './EntryButton'


const Entry = ({ entry, toggleComplete, deleteEntry }) => (
    <View style={styles.entryContainer}>
        <Text style={styles.entryText}>
            {entry.title}
        </Text>
        <View style={styles.buttons}>
            <EntryButton
                name='Done'
                complete={entry.complete}
                onPress={() => toggleComplete(entry.entryIndex)} />
            <EntryButton
                name='Delete'
                onPress={() => deleteEntry(entry.entryIndex)} />
        </View>
    </View>
)


const styles = StyleSheet.create({
    entryContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fffbfe',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#fffbfe',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    entryText: {
        fontSize: 17
    }
})

export default Entry