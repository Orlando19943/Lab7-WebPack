const presets = [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: "3",
      },
    ],
  ];
const plugins = [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-template-literals"
];
  
module.exports = { presets, plugins };