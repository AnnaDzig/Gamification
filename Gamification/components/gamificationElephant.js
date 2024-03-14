import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const initialAccessories = [
  { id: 'hat', added: false, image: require('../assets/hat.png') },
  { id: 'fishingRod', added: false, image: require('../assets/fishing.png') },
  { id: 'necklace', added: false, image: require('../assets/necklace.png') },
  { id: 'pumpkin', added: false, image: require('../assets/pumpkin.png') },
  { id: 'fishingRod1', added: false, image: require('../assets/fishing.png') },
  { id: 'necklace1', added: false, image: require('../assets/necklace.png') },
  { id: 'hat2', added: false, image: require('../assets/hat.png') },
  { id: 'fishingRod2', added: false, image: require('../assets/fishing.png') },
  { id: 'necklace2', added: false, image: require('../assets/necklace.png') },
];

const GamificationElephant = () => {
  const [accessories, setAccessories] = useState(initialAccessories);

  const toggleAccessory = (id) => {
    setAccessories((currentAccessories) =>
      currentAccessories.map((accessory) =>
        accessory.id === id
          ? { ...accessory, added: !accessory.added }
          : accessory
      )
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/elephant.png')} style={styles.elephant} />
      <View style={styles.accessoriesContainer}>
        {accessories
          .filter((accessory) => accessory.added)
          .map((accessory, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleAccessory(accessory.id)}
              style={[
                styles[accessory.id],
                { position: 'absolute', opacity: accessory.added ? 1 : 0 },
              ]}
            >
              <Image
                source={accessory.image}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.buttonsContainer}>
        {accessories.map((accessory, index) => (
          <View key={index} style={styles.buttonRow}>
            <TouchableOpacity onPress={() => toggleAccessory(accessory.id)}>
              <Image source={accessory.image} style={styles.button} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  elephant: {
    width: 300,
    height: 400,
    borderWidth: 1,
  },
  accessoriesContainer: {
    position: 'absolute',
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hat: {
    position: 'absolute',
    width: 150,
    height: 150,
    bottom: 310,
    left: 70,
  },
  fishingRod: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    right: 120,
  },
  necklace: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 190,
    left: 100,
  },
  pumpkin: {
    position: 'absolute',
    width: 150,
    height: 150,
    bottom: 300,
    left: 70,
  },
  fishingRod1: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    right: 120,
  },
  necklace1: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 130,
    left: 90,
  },
  hat2: {
    position: 'absolute',
    width: 150,
    height: 150,
    bottom: 300,
    left: 70,
  },
  fishingRod2: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    right: 120,
  },
  necklace2: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 130,
    left: 90,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '70%',
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: 70,
    height: 70,
  },
});

export default GamificationElephant;
