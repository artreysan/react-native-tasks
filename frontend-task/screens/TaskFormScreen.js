import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'

const TaskFormScreen = () => {
  return (
    <Layout>
        <TextInput style={styles.input}
        placeholder='Write a Title'
        onChangeText={ text => console.log(text)}
        ></TextInput>
      <TextInput style={styles.input}
        placeholder='Write a Description'
        ></TextInput>
        <TouchableOpacity style={styles.buttonSave} disabled>
          <Text style={styles.buttonText}> Save Task</Text>
        </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 30,
    color: "#ooo" ,
    padding: 4,
    textAlign: 'center',
    borderRadius: 5
  },
  buttonSave:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#10ac84',
    width: '90%'

  },
  buttonText:{
    color: '#fff',
    textAlign: 'center'
  }

});

export default TaskFormScreen