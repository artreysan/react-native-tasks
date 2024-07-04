import { View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTasks} from '../api.js';
import TaskList from '../components/TaskList.js';
import Layout from '../components/Layout.js'

const HomeScreen = () => {

  const [tasks, setTasks] = useState([]);
  
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Layout>
      <TaskList
        tasks={tasks}
      ></TaskList>

    </Layout>
  )
}

export default HomeScreen