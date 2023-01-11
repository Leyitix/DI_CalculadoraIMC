import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Calculadora} from './components/Calculadora';

class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Calculadora IMC</Text>
        </View>
        <Calculadora />
        <View style={styles.sectionFooter}>
          <Text style={styles.titleFooter}>Created for 2n DAM</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#5C1B82',
  },
  sectionTitle: {
    fontWeight: '600',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    color: 'red',
  },
  sectionFooter: {
    flex: 1,
  },
  titleFooter: {
    fontSize: 20,
    color: 'grey',
    padding: 13,
  },
});

export default App;
