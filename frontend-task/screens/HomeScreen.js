import { View} from 'react-native';
import React from 'react';
import TaskList from '../components/TaskList.js';
import Layout from '../components/Layout.js'

const HomeScreen = () => {



  return (
    <Layout>
      <TaskList
      ></TaskList>

    </Layout>
  )
}

export default HomeScreen