import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
export default function ProfileScreen({ navigation }) {
  const user = auth().currentUser;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ข้อมูลโปรไฟล์</Text>
      <Text style={{ marginTop: 60, fontSize: 20 }}>ชื่อ: {user.displayName}</Text>
      <Text style={{ marginTop: 60, fontSize: 20 }}>อีเมล: {user.email}</Text>
      <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={{fontSize: 20 }}>แก้ไขโปรไฟล์</Text>
          </TouchableOpacity>
        </View>
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