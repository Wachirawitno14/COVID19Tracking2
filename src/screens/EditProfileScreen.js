import React, { useState, useContext } from 'react';
import { View, Alert,Text, StyleSheet,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import FormInput from '../components/FormInput';
export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  Updatename = () => {
  auth().currentUser.updateProfile({
    displayName:(name)
  })
  .then(() => {
    Alert.alert(
      'บันทึกโปรไฟล์ข้อมูลเรียบร้อย',
      '',
      [
        {
          text: 'ตกลง', onPress: () => navigation.push('Profile')
        },
      ],
    );
  });
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>แก้ไขชื่อโปรไฟล์</Text>
      <FormInput
        value={name}
        placeholderText='ชื่อ'
        onChangeText={userName => setName(userName)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.Updatename()}>
        <Text style={{ fontSize: 20 }}>อัพเดทโปรไฟล์</Text>
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