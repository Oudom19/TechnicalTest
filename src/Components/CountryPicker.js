import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { countries } from './Countries';

const CountryPicker = ({ onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    onSelect(country);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>
          {selectedCountry ? `${selectedCountry.name} (${selectedCountry.code})` : 'Select Country'}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item.name} ({item.code})</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
    width: '35%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#333',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 7,
    overflow: 'hidden',
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CountryPicker;
