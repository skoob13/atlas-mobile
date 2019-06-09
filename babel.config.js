module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: [
        './src',
      ],
    }],
    '@babel/plugin-proposal-optional-chaining',
  ],
};
