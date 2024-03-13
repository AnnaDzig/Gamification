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

const GamificationLion = () => {
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
      <Image source={require('../assets/2.png')} style={styles.lion} />
      <View style={styles.accessoriesContainer}>
        {accessories.map((accessory, index) => (
          <Image
            key={index}
            source={accessory.image}
            style={[
              styles.accessory,
              { opacity: accessory.added ? 1 : 0 },
              accessory.id === 'hat' && styles.hat,
              accessory.id === 'fishingRod' && styles.fishingRod,
              accessory.id === 'necklace' && styles.necklace,
              accessory.id === 'pumpkin' && styles.pumpkin,
              accessory.id === 'fishingRod1' && styles.fishingRod1,
              accessory.id === 'necklace1' && styles.necklace1,
              accessory.id === 'hat2' && styles.hat2,
              accessory.id === 'fishingRod2' && styles.fishingRod2,
              accessory.id === 'necklace2' && styles.necklace2,
            ]}
          />
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

// Add your styles here
const styles = StyleSheet.create({
  // styles go here
  container: {
    flexDirection: 'row', // Lay out children in a row
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-around', // Distribute extra space around items
    width: '100%', // Set the width to take up 100% of the parent container
    marginTop: 20, // Space above the buttons container
  },
  lion: {
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
    bottom: 280,
    left: 70,
  },
  fishingRod: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    left: 100,
  },
  necklace: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: 130,
    left: 90,
  },
  pumpkin: {
    position: 'absolute',
    width: 150,
    height: 150,
    bottom: 280,
    left: 70,
  },
  fishingRod1: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    left: 100,
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
    bottom: 280,
    left: 70,
  },
  fishingRod2: {
    position: 'absolute',
    width: 250,
    height: 250,
    bottom: 40,
    left: 100,
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
    gap: '20',
    width: '70%',
    marginTop: 20,
    marginBottom: 45,
  },
  button: {
    borderWidth: 1,
    borderRadius: '10',
    width: 70,
    height: 70,
  },
});

export default GamificationLion;
