import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api.js'

const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    title: '',
    description_task: ''
  });


  const [editing, setEditing] = useState(false);

  useEffect( () => {
    if(route.params && route.params.id){
      navigation.setOptions({headerTitle: 'Updating a task'});
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({
          title: task.title,
          description_task: task.description_task
         });
      })();
    }
  },[]);

  const hundleChange = (name, value) => setTask({
      ...task,
      [name]: value
    }
  )

  const hundleSubmit = async () => {
    try {
      if(editing){
        updateTask(route.params.id, task); 
      }
      else{
        await saveTask(task);
      }
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
        <TextInput style={styles.input}
        placeholder='Write a Title'
        onChangeText={ (text) => hundleChange('title',text)}
        value={task.title}
        ></TextInput>
      <TextInput style={styles.input}
        placeholder='Write a Description'
        onChangeText={ (text) => hundleChange('description_task',text)}
        value={task.description_task}
        ></TextInput>

      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={hundleSubmit}>
          <Text style={styles.buttonText}> Save Task</Text>
        </TouchableOpacity>
        ) : 
        (
        <TouchableOpacity style={styles.buttonUpdate} onPress={hundleSubmit}>
          <Text style={styles.buttonText}> Update Task</Text>
        </TouchableOpacity>
        )
      }

        

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
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#e58e26',
    width: '90%'
  }

});

export default TaskFormScreen