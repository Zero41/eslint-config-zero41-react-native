module.exports = {
  extends: ["eslint-config-zero41-react", "plugin:react-native/all"],
  plugins: ["react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-native/no-inline-styles": "off",
  },
};
