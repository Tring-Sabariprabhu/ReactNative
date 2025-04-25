module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias:{
          src: './src',
          screens: './src/components/screens',
          navigations: './src/components/navigations',
          routes: './src/routes',
          assets: './src/assets',
        },
      },
    ],
  ],
};
