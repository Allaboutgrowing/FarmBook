import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>FarmBook</Text>
            <Text style={styles.subtitle}>
              Smart Farming. Better Management.
            </Text>
          </View>

          <Text style={styles.profile}>FB</Text>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.greeting}>Welcome back!</Text>
          <Text style={styles.welcomeText}>
            Manage your farm operations from one place.
          </Text>
        </View>

        {/* Statistics */}
        <Text style={styles.sectionTitle}>
          Farm Overview
        </Text>

        <View style={styles.statsContainer}>

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

        <View style={styles.menuContainer}>

          <View style={styles.menuCard}>
            <Text style={styles.menuIcon}>🐄</Text>
            <Text style={styles.menuTitle}>Livestock</Text>
            <Text style={styles.menuDescription}>
              Manage animals and health records.
            </Text>
          </View>

          <View style={styles.menuCard}>
            <Text style={styles.menuIcon}>🌱</Text>
            <Text style={styles.menuTitle}>Crop Farming</Text>
            <Text style={styles.menuDescription}>
              Monitor planting and harvesting.
            </Text>
          </View>

          <View style={styles.menuCard}>
            <Text style={styles.menuIcon}>💰</Text>
            <Text style={styles.menuTitle}>Finances</Text>
            <Text style={styles.menuDescription}>
              Track farm income and expenses.
            </Text>
          </View>

          <View style={styles.menuCard}>
            <Text style={styles.menuIcon}>📊</Text>
            <Text style={styles.menuTitle}>Reports</Text>
            <Text style={styles.menuDescription}>
              Review farm performance.
            </Text>
          </View>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            FarmBook by Yaxo-Systems
          </Text>
          <Text style={styles.footerSub}>
            Building smarter agricultural solutions.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },

  header: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#246B38',
  },

  subtitle: {
    fontSize: 11,
    color: '#718071',
    marginTop: 4,
  },

  profile: {
    backgroundColor: '#246B38',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 25,
    fontWeight: 'bold',
  },

  welcome: {
    padding: 22,
    marginTop: 12,
  },

  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#193D27',
  },

  welcomeText: {
    fontSize: 14,
    color: '#718071',
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#193D27',
    marginHorizontal: 22,
    marginTop: 18,
    marginBottom: 14,
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
  },

  statCard: {
    width: '46%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    margin: '2%',
    borderRadius: 12,
  },

  statNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#246B38',
  },

  statLabel: {
    fontSize: 12,
    color: '#718071',
    marginTop: 7,
  },

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
  },

  menuCard: {
    width: '46%',
    backgroundColor: '#FFFFFF',
    padding: 17,
    margin: '2%',
    borderRadius: 12,
    minHeight: 145,
  },

  menuIcon: {
    fontSize: 27,
    marginBottom: 12,
  },

  menuTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#193D27',
  },

  menuDescription: {
    fontSize: 11,
    color: '#718071',
    marginTop: 7,
    lineHeight: 17,
  },

  footer: {
    alignItems: 'center',
    padding: 30,
    marginTop: 15,
  },

  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#246B38',
  },

  footerSub: {
    fontSize: 11,
    color: '#718071',
    marginTop: 6,
  },

});
