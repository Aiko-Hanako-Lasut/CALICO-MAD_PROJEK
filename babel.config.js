module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@komponen': './src/komponen',
          '@pages': './src/pages',
          // Tambahkan alias lain sesuai kebutuhan
        },
      },
    ],
  ],
};
