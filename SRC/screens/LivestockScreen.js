import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function LivestockScreen({ onBack }) {

  const [animals, setAnimals] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');

  const registerAnimal = () => {

    if (!name || !type || !breed || !gender) {
      Alert.alert('Missing Information', 'Please complete all fields.');
      return;
    }

    const newAnimal = {
      id: Date.now().toString(),
      name,
      type,
      breed,
      gender,
    };

    setAnimals([...animals, newAnimal]);

    setName('');
    setType('');
    setBreed('');
    setGender('');

    Alert.alert('Success', 'Animal registered successfully!');
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Livestock Management</Text>
        <Text style={styles.subtitle}>
          Register and manage your farm animals.
        </Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.number}>{animals.length}</Text>
        <Text style={styles.label}>Registered Animals</Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.sectionTitle}>
          Register New Animal
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Animal Name or ID"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Animal Type (e.g. Cattle)"
          value={type}
          onChangeText={setType}
        />

        <TextInput
          style={styles.input}
          placeholder="Breed"
          value={breed}
          onChangeText={setBreed}
        />

        <TextInput
          style={styles.input}
          placeholder="Gender (Male/Female)"
          value={gender}
          onChangeText={setGender}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={registerAnimal}
        >
          <Text style={styles.buttonText}>
            Register Animal
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.sectionTitle}>
        Animal Records
      </Text>

      {animals.map((animal) => (

        <View key={animal.id} style={styles.animalCard}>

          <Text style={styles.animalName}>
            {animal.name}
          </Text>

          <Text style={styles.details}>
            Type: {animal.type}
          </Text>

          <Text style={styles.details}>
            Breed: {animal.breed}
          </Text>

          <Text style={styles.details}>
            Gender: {animal.gender}
          </Text>

        </View>

      ))}

      {animals.length === 0 && (
        <Text style={styles.empty}>
          No animals registered yet.
        </Text>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },

  header: {
    padding: 24,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#246B38',
  },

  subtitle: {
    color: '#718071',
    marginTop: 6,
  },

  summary: {
    backgroundColor: '#246B38',
    margin: 20,
    padding: 25,
    borderRadius: 15,
  },

  number: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  label: {
    color: '#FFFFFF',
    marginTop: 5,
  },

  form: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#193D27',
    margin: 20,
  },

  input: {
    backgroundColor: '#F4F7F2',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 14,
  },

  button: {
    backgroundColor: '#246B38',
    padding: 16,
    borderRadius: 9,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  animalCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 10,
  },

  animalName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#246B38',
    marginBottom: 8,
  },

  details: {
    color: '#667366',
    marginTop: 4,
  },

  empty: {
    textAlign: 'center',
    color: '#718071',
    margin: 20,
  },

});
