import React from 'react'
import { View } from 'react-native'
import Entry from './Entry'

const EntryList = ({ entrys, deleteEntry, toggleComplete, type }) => {
    const getVisibleTodos = (entrys, type) => {
        switch (type) {
            case 'All':
                return entrys
            case 'Complete':
                return entrys.filter((t) => t.complete)
            case 'Active':
                return entrys.filter((t) => !t.complete)
        }
    }
    entrys = getVisibleTodos(entrys, type)
    entrys = entrys.map((entry, i) => {
        return (
            <Entry
                deleteEntry={deleteEntry}
                toggleComplete={toggleComplete}
                key={i}
                entry={entry} />
        )
    })
    return (
        <View>
            {entrys}
        </View>
    )
}
export default EntryList