import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Taskitem = function TaskItem({task}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemDescription}>{task.description_task}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5
    },
    itemTitle:{
        color: '#fff'
    },
    itemDescription: {
        color: '#abc'
    }
});

export default Taskitem;