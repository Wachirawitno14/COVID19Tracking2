import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import QRScreen from '../screens/QRScreen';
import CheckinScreen from '../screens/CheckinScreen';
import CheckOutScreen  from'../screens/CheckOutScreen';
import RescanScreen from'../screens/RescanScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen  from'../screens/EditProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import EvaluateScreen from '../screens/EvaluateScreen';
import GuideScreen from '../screens/GuideScreen';
import QuizScreen  from'../screens/QuizScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const HomeStack2 = createStackNavigator();
//สำหรับหน้าแบบทดสอบกับคำแนะนำ
function HomeStackScreen() {
  return (
    <HomeStack2.Navigator>
      <HomeStack2.Screen name="Home" component={HomeScreen}  options={{ title: 'หน้าหลัก'}} />
      <HomeStack2.Screen name="Evaluate" component={EvaluateScreen} />
      <HomeStack2.Screen name="Guide" component={GuideScreen} options={{ title: 'คำแนะนำ'}} />
      <HomeStack2.Screen name="Quiz" component={QuizScreen} />
    </HomeStack2.Navigator>
  );
}
function QRStackScreen() {
  return (
    <HomeStack2.Navigator>
      <HomeStack2.Screen name="QR" component={QRScreen} options={{ headerLeft: null, title: 'สแกนQRCode'}}/>
      <HomeStack2.Screen name="Checkin" component={CheckinScreen} options={{ headerLeft: null, title: 'Check In สถานที่'}} />
      <HomeStack2.Screen name="Checkout" component={CheckOutScreen} options={{ headerLeft: null,  title: 'Check Out สถานที่'}}/>
      <HomeStack2.Screen name="Rescan" component={RescanScreen} options={{ headerLeft: null, title: 'Rescan' }}/>
    </HomeStack2.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <HomeStack2.Navigator>
      <HomeStack2.Screen name="Profile" component={ProfileScreen} options={{ headerLeft: null, title: 'โปรไฟล์' }}/>
      <HomeStack2.Screen name="EditProfile" component={EditProfileScreen} options={{ headerLeft: null, title: 'แก้ไขโปรไฟล์' }} />
    </HomeStack2.Navigator>
  );
}

export default function HomeStack() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} 
      options={{
        tabBarLabel: 'หน้าหลัก',
        tabBarColor: '#51DCA8',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="สแกนQRCode" component={QRStackScreen} 
       options={{
        tabBarLabel: 'QRScan',
        tabBarColor: '#51DCA8',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-qr-scanner" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={ProfileStackScreen}
      options={{
        tabBarLabel: 'โปรไฟล์',
        tabBarColor: '#51DCA8',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }} 
      />
      <Tab.Screen name="Setting" component={SettingScreen} 
      options={{
        tabBarLabel: 'ตั้งค่า',
        tabBarColor: '#51DCA8',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={26} />
        ),
      }} 
      />
    </Tab.Navigator>
    
  );
  
}