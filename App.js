import React from ‘react’;
import {
View,
Text,
StyleSheet,
StatusBar,
SafeAreaView,
} from ‘react-native’;

export default function App() {
return (
  <View style={styles.header}>
    <Text style={styles.logo}>FarmBook</Text>
    <Text style={styles.tagline}>
      Smart Farming. Better Management.
    </Text>
  </View>
  <View style={styles.welcome}>
    <Text style={styles.title}>
      Welcome to FarmBook
    </Text>
    <Text style={styles.description}>
      Your digital platform for managing
      agricultural activities, livestock,
      crops and farm finances.
    </Text>
  </View>
</SafeAreaView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: ‘#F5F8F2’,
},

header: {
padding: 25,
backgroundColor: ‘#FFFFFF’,
},

logo: {
fontSize: 30,
fontWeight: ‘bold’,
color: ‘#246B38’,
},

tagline: {
fontSize: 13,
color: ‘#687568’,
marginTop: 5,
},

welcome: {
padding: 25,
marginTop: 35,
},

title: {
fontSize: 25,
fontWeight: ‘bold’,
color: ‘#183D25’,
},

description: {
fontSize: 15,
color: ‘#667366’,
lineHeight: 24,
marginTop: 12,
},
});
