import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>คำแนะนำ</Text>
      
      <Text style={styles.bold}>หมั่นล้างมือบ่อยๆ</Text>
      <Text style={styles.text}>        เราควรหมั่นล้างมือด้วยน้ำและสบู่เป็นประจำ หรือใช้เจลล้างมือที่มีส่วนผสมของแอกอฮอล์ถึงแม้ว่ามือเราจะไม่มีคราบสกปรก
      เหตุผล การล้างมือด้วยน้ำและสบู่ หรือใช้เจลล้างมือที่มีส่วนผสมของแอลกอฮอล์สามารถกำจัดเชื้อไวรัสที่อยู่บนมือเราได้
      </Text>
      <Text style={styles.bold}>ปฏิบัติตนตามหลักสุขอนามัยที่ดี</Text>
      <Text style={styles.text}>        ปิดปากและจมูกทุกครั้งที่ไอ จามด้วยกระดาษเช็ดหน้า หรือจามใส่ข้อพับต้นแขนด้านใน ทิ้งกระดาษเช็ดหน้าที่ใช้งานแล้วลงในถังขยะที่มีฝาปิดทันที ตามด้วยการล้างมือให้สะอาดด้วยน้ำและสบู่ หรือเจลล้างมือแอลกอฮอล์
      เหตุผล การปิดปากและจมูกทุกครั้งที่ไอ จามจะเป็นการป้องกันการแพร่กระจายของเชื้อโรคและเชื้อไวรัส แต่หากเราใช้มือเปล่าปิดปากและจมูกขณะไอ จาม มือของเราอาจปนเปื้อนเชื้อโรคแล้วเมื่อเราไปสัมผัสกับผู้อื่นหรือสิ่งของ สิ่งของและผู้อื่นอาจได้รับเชื้อโรคจากเราได้ จึงควรรีบล้างมือให้สะอาดทันที
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
},
});