import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {getTasks} from '../api.js'

const HomeScreen = () => {
  const loadTasks = async () => {
    const data = await getTasks();
    console.log(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen