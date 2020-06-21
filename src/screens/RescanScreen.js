import React from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RescanScreen({ route, navigation }) {
  const { data } = route.params;
  const { scanner } = route.params;
  
  rescan = () => {
    navigation.push('QR');
  }
  return (
    <View style={styles.container}>
      <Text>สแกนอีกหรือกลับหน้าหลัก</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home', { screen: 'Home' })}>
        <Text style={{ fontSize: 20 }}>กลับหน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.rescan()}>
        <Text style={{ fontSize: 20 }}>สแกนสถานที่อีกครั้ง</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: 350,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});