# Standard ESLint for React Native Zero41 Projects

## Installation

1. Install `eslint`:
  ```sh
  yarn add eslint --dev
  ```
   
2. Install `eslint-config-zero41-react-native`:
  ```sh
  yarn add eslint-config-zero41-react-native@https://github.com/Zero41/eslint-config-zero41-react-native.git --dev
  ```

3. Add `eslint-config-zero41-react-native` to your ESLint `.eslintrc.js` config:
  ```javascript
  module.exports = {
    extends: ["eslint-config-zero41-react-native"],
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  };
  ```

4. If you are using absolute imports, use paths to define the root:
  ```diff
  module.exports = {
    extends: ["eslint-config-zero41-react-native"],
  +  settings: {
  +    "import/resolver": {
  +      node: {
  +        paths: ["./"],
  +      },
  +    },
  + },
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  };
  ```
  
5. If you have files types other than `*.js`, `*.jsx`, `*.ts` or `*.tsx` add them:
  ```diff
  module.exports = {
    extends: ["eslint-config-zero41-react-native"],
    settings: {
      "import/resolver": {
        node: {
          paths: ["./"],
  +         extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        },
      },
    },
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  };
  ```
## Other ESLint Configs
- Standard ESLint for Zero41 Projects: [eslint-config-zero41](https://github.com/Zero41/eslint-config-zero41)
- Standard ESLint for React Zero41 Projects: [eslint-config-zero41-react](https://github.com/Zero41/eslint-config-zero41-react)
