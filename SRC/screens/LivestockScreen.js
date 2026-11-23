import React from ‘react’;

import {
View,
Text,
StyleSheet,
ScrollView,
TouchableOpacity,
} from ‘react-native’;

export default function LivestockScreen() {
return (
  <View style={styles.header}>
    <Text style={styles.title}>Livestock</Text>
    <Text style={styles.subtitle}>
      Manage your farm animals
    </Text>
  </View>
  <View style={styles.summary}>
    <Text style={styles.number}>0</Text>
    <Text style={styles.label}>Total Registered Animals</Text>
  </View>
  <Text style={styles.sectionTitle}>
    Livestock Categories
  </Text>
  <View style={styles.card}>
    <Text style={styles.icon}>🐄</Text>
    <View>
      <Text style={styles.cardTitle}>Cattle</Text>
      <Text style={styles.cardSubtitle}>
        Manage cattle records
      </Text>
    </View>
  </View>
  <View style={styles.card}>
    <Text style={styles.icon}>🐐</Text>
    <View>
      <Text style={styles.cardTitle}>Goats & Sheep</Text>
      <Text style={styles.cardSubtitle}>
        Manage small ruminants
      </Text>
    </View>
  </View>
  <View style={styles.card}>
    <Text style={styles.icon}>🐔</Text>
    <View>
      <Text style={styles.cardTitle}>Poultry</Text>
      <Text style={styles.cardSubtitle}>
        Manage poultry records
      </Text>
    </View>
  </View>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>
      + Register New Animal
    </Text>
  </TouchableOpacity>
</ScrollView>

);
}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: ‘#F4F7F2’,
},

header: {
padding: 24,
},

title: {
fontSize: 27,
fontWeight: ‘bold’,
color: ‘#246B38’,
},

subtitle: {
fontSize: 14,
color: ‘#718071’,
marginTop: 6,
},

summary: {
backgroundColor: ‘#246B38’,
margin: 20,
padding: 25,
borderRadius: 15,
},

number: {
fontSize: 35,
fontWeight: ‘bold’,
color: ‘#FFFFFF’,
},

label: {
color: ‘#FFFFFF’,
fontSize: 14,
marginTop: 5,
},

sectionTitle: {
fontSize: 19,
fontWeight: ‘bold’,
color: ‘#193D27’,
margin: 20,
},

card: {
backgroundColor: ‘#FFFFFF’,
marginHorizontal: 20,
marginBottom: 12,
padding: 20,
borderRadius: 12,
flexDirection: ‘row’,
alignItems: ‘center’,
},

icon: {
fontSize: 32,
marginRight: 18,
},

cardTitle: {
fontSize: 16,
fontWeight: ‘bold’,
color: ‘#193D27’,
},

cardSubtitle: {
fontSize: 12,
color: ‘#718071’,
marginTop: 5,
},

button: {
backgroundColor: ‘#246B38’,
margin: 20,
padding: 17,
borderRadius: 10,
alignItems: ‘center’,
},

buttonText: {
color: ‘#FFFFFF’,
fontWeight: ‘bold’,
fontSize: 15,
},

});
