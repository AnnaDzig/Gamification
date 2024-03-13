import React from 'react';
import { View, StyleSheet,ScrollView, SafeAreaView } from 'react-native';
import GamificationLion from './components/gamificationLion';
import GamificationElephant from './components/gamificationElephant';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <GamificationLion />
      <GamificationElephant />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
