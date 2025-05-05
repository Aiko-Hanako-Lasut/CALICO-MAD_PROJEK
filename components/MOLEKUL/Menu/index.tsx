import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

interface MenuItem {
  iconSource: any; // Gunakan 'any' atau tentukan tipe yang lebih spesifik untuk source gambar
  label: string;
  onPress: () => void;
}

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
  if (!isOpen) {
    return null;
  }

  const menuItems: MenuItem[] = [
    {
      iconSource: require('../../../assets/Home.png'), // Ganti dengan path ikon home Anda
      label: 'Home',
      onPress: () => {
        navigation.navigate('Home');
        onClose();
      },
    },
    {
      iconSource: require('../../../assets/Home.png'), // Ganti dengan path ikon create quiz Anda
      label: 'Create Quiz',
      onPress: () => {
        navigation.navigate('CreateQuiz');
        onClose();
      },
    },
    {
      iconSource: require('../../../assets/reportnote.png'), // Ganti dengan path ikon report Anda
      label: 'Report',
      onPress: () => {
        navigation.navigate('ReportScreen');
        onClose();
      },
    },
    {
      iconSource: require('../../../assets/Home.png'), // Ganti dengan path ikon about us Anda
      label: 'About Us',
      onPress: () => {
        navigation.navigate('About');
        onClose();
      },
    },
    // Tambahkan item menu lainnya di sini
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/LogoCalico.png')} // Ganti dengan path logo kecil Anda
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>MAKE YOUR STUDY FUN</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={item.onPress}>
              <View style={styles.itemIndicator} />
              <Image
                source={item.iconSource}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Ornament (Optional) */}
        <View style={styles.bottomOrnament} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '75%', // Lebih lebar dari sebelumnya
    backgroundColor: '#FFDA63', // Warna latar belakang utama
    paddingTop: 20, // Sesuaikan padding top
    paddingHorizontal: 15,
    zIndex: 100,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 120, // Sesuaikan ukuran logo
    height: 40,
  },
  subtitle: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
  },
  menuItemsContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 5,
  },
  itemIndicator: {
    width: 5,
    height: '100%',
    backgroundColor: '#008080', // Warna indikator
    marginRight: 15,
  },
  icon: {
    width: 24, // Sesuaikan ukuran ikon
    height: 24,
    marginRight: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  bottomOrnament: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // Sesuaikan tinggi ornamen
    backgroundColor: 'rgba(255, 218, 99, 0.5)', // Contoh warna ornamen
    // Anda bisa menambahkan ImageBackground di sini jika ornamennya berupa gambar
  },
});

export default MenuDrawer;
