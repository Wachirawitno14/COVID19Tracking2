import React from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';

export default function CheckOutScreen({ route, navigation }) {
  const { data } = route.params;
  const { date1 } = route.params;
  checkout = () => {
    const date = moment()
    .utcOffset('+7:00')
    .format('DD-MM-YYYYTHH:mm');
    const user = auth().currentUser;
    const checkout = database().ref('/timestamp/').push();
    checkout.set({
      name: user.displayName,
      Place: data,
      CheckIn:date1,
      Checkout:date,
    }).then(() => {
      Alert.alert(
        'บันทึกCheck Outข้อมูลเรียบร้อย',
        '',
        [
          {
            text: 'ตกลง', onPress: () => navigation.navigate('Rescan', {data: data})
          },
        ],
      );
    });
  }
  return (
    <View style={styles.container}>
      <Text>สถานที่: {JSON.stringify(data)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.checkout()}>
        <Text style={{ fontSize: 20 }}>Check Out</Text>
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