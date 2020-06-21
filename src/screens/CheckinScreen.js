import React from 'react';
import { View, Alert,Text, StyleSheet,TouchableOpacity} from 'react-native';
import moment from 'moment';

export default function CheckinScreen({ route,navigation }) {
  const { data } = route.params;
  checkin = () => {
    const date1 = moment()
    .utcOffset('+7:00')
    .format('DD-MM-YYYYTHH:mm');
     Alert.alert(
        'บันทึกCheck Inข้อมูลเรียบร้อย',
        '',
        [
          {text: 'ตกลง', onPress: () => navigation.navigate('Checkout', {data: data,date1:date1})
          },
        ],
      );
}
  return (
    <View style={styles.container}>
      <Text>สถานที่: {JSON.stringify(data)}</Text>
      <TouchableOpacity
            style={styles.button}
            onPress={() => this.checkin()}>
            <Text style={{fontSize: 20 }}>Check In</Text>
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