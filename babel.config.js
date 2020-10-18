module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      require('@babel/plugin-proposal-decorators').default,
      { legacy: true }
    ]
  ]
};