import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>
        <Text style={styles.title1}>BREAKING </Text>
        <Text style={styles.title2}>BAD</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Home;
