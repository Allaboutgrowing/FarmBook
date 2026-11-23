import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import LivestockScreen from './src/screens/LivestockScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  // Open Livestock Management
  if (activeScreen === 'livestock') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          backgroundColor="#246B38"
          barStyle="light-content"
        />

        <LivestockScreen
          onBack={() => setActiveScreen('dashboard')}
        />
      </SafeAreaView>
    );
  }

  // Show dashboard
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#246B38"
        barStyle="light-content"
      />

      <ScrollView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>FarmBook</Text>

          <Text style={styles.tagline}>
            Smart Farming. Better Management.
          </Text>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>
            Welcome to FarmBook
          </Text>

          <Text style={styles.welcomeText}>
            Manage your farm operations in one place.
          </Text>
        </View>

        {/* Farm Overview */}
        <Text style={styles.sectionTitle}>
          Farm Overview
        </Text>

        <View style={styles.grid}>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Livestock</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Crop Records</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Farm Tasks</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>GH₵0</Text>
            <Text style={styles.statLabel}>Revenue</Text>
          </View>

        </View>

        {/* Farm Management */}
        <Text style={styles.sectionTitle}>
          Farm Management
        </Text>

        <View style={styles.managementContainer}>

          {/* Livestock */}
          <TouchableOpacity
            style={styles.managementCard}
            onPress={() => setActiveScreen('livestock')}
          >
            <Text style={styles.cardTitle}>
              Livestock
            </Text>

            <Text style={styles.cardDescription}>
              Register and manage farm animals.
            </Text>

            <Text style={styles.openText}>
              Open Management →
            </Text>
          </TouchableOpacity>

          {/* Crop Farming */}
          <TouchableOpacity
            style={styles.managementCard}
            onPress={() =>
              Alert.alert(
                'Coming Soon',
                'Crop Farming Management is under development.'
              )
            }
          >
            <Text style={styles.cardTitle}>
              Crop Farming
            </Text>

            <Text style={styles.cardDescription}>
              Manage crops and farm production.
            </Text>

            <Text style={styles.openText}>
              Coming Soon
            </Text>
          </TouchableOpacity>

          {/* Finances */}
          <TouchableOpacity
            style={styles.managementCard}
            onPress={() =>
              Alert.alert(
                'Coming Soon',
                'Farm Finance Management is under development.'
              )
            }
          >
            <Text style={styles.cardTitle}>
              Finances
            </Text>

            <Text style={styles.cardDescription}>
              Track farm income and expenses.
            </Text>

            <Text style={styles.openText}>
              Coming Soon
            </Text>
          </TouchableOpacity>

          {/* Reports */}
          <TouchableOpacity
            style={styles.managementCard}
            onPress={() =>
              Alert.alert(
                'Coming Soon',
                'Farm Reports are under development.'
              )
            }
          >
            <Text style={styles.cardTitle}>
              Reports
            </Text>

            <Text style={styles.cardDescription}>
              Review your farm performance.
            </Text>

            <Text style={styles.openText}>
              Coming Soon
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            FarmBook by Yaxo-Systems
          </Text>

          <Text style={styles.footerSubtext}>
            Building smarter agricultural solutions.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },

  header: {
    backgroundColor: '#246B38',
    padding: 25,
    paddingTop: 35,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  tagline: {
    fontSize: 13,
    color: '#E2EFE4',
    marginTop: 5,
  },

  welcome: {
    padding: 22,
  },

  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#193D27',
  },

  welcomeText: {
    color: '#718071',
    marginTop: 7,
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#193D27',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },

  statCard: {
    backgroundColor: '#FFFFFF',
    width: '44%',
    margin: '3%',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },

  statNumber: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#246B38',
  },

  statLabel: {
    fontSize: 13,
    color: '#718071',
    marginTop: 6,
  },

  managementContainer: {
    paddingHorizontal: 20,
  },

  managementCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#246B38',
  },

  cardDescription: {
    fontSize: 13,
    color: '#718071',
    marginTop: 7,
  },

  openText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#246B38',
    marginTop: 12,
  },

  footer: {
    padding: 25,
    alignItems: 'center',
  },

  footerText: {
    color: '#246B38',
    fontWeight: 'bold',
    fontSize: 14,
  },

  footerSubtext: {
    color: '#879287',
    fontSize: 11,
    marginTop: 5,
  },

});
