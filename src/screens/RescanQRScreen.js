import React, { Component }  from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class RescanQRScreen extends Component {
  onSuccess = async e => {
    await this.props.navigation.navigate('Checkin', {
      data: e.data
    });
  };  
 
  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          cameraStyle={{ height: Dimensions.get("window").height }}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: 350,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});