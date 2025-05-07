import React from 'react';
import {View, Text, Pressable, Modal, StyleSheet, Image} from 'react-native';
import {CreateQuiz, Report, About} from '../../../constants';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: any;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  navigation,
}) => {
  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      transparent
      onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuHeader}>MENU</Text>

          {/* Create Quiz */}
          <Pressable
            style={({pressed}) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={() => {
              onClose();
              navigation.navigate(CreateQuiz);
            }}>
            <Image
              source={require('../../../assets/add.jpg')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Create Quiz</Text>
          </Pressable>

          {/* Report */}
          <Pressable
            style={({pressed}) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={() => {
              onClose();
              navigation.navigate(Report);
            }}>
            <Image
              source={require('../../../assets/reportnote.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>Report</Text>
          </Pressable>

          {/* About Us */}
          <Pressable
            style={({pressed}) => [
              styles.menuItem,
              pressed && styles.menuItemPressed,
            ]}
            onPress={() => {
              onClose();
              navigation.navigate(About);
              // Navigate to AboutUS
            }}>
            <Image
              source={require('../../../assets/informasi.png')}
              style={styles.icon}
            />
            <Text style={styles.menuText}>About Us</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuContainer: {
    backgroundColor: '#FFCC66',
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: 250,
    height: '100%',
    elevation: 5,
  },
  menuHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    color: '#000',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    borderRadius: 8,
  },
  menuItemPressed: {
    backgroundColor: '#ffe299',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MenuDrawer;
