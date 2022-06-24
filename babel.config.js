module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts'],
        alias: {
          Components: '/components',
          Screens: '/screens',
          Utils: '/utils',
        },
      },
    ],
  ],
};
