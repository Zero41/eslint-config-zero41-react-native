# Standard ESLint for React Native Zero41 Projects

## Installation

1. Install `eslint`:
  ```sh
  yarn add eslint@^8 --dev
  ```
  ```sh
  npm i eslint@^8 --save-dev
  ``` 
   
2. Install `eslint-config-zero41-react-native`:
  ```sh
  yarn add eslint-config-zero41-react-native@https://github.com/Zero41/eslint-config-zero41-react-native.git --dev
  ```
  ```sh
  npm install eslint-config-zero41-react-native@github:Zero41/eslint-config-zero41-react-native --save-dev
  ```

3. Add `eslint-config-zero41-react-native` to your ESLint `.eslintrc.js` config:
  ```javascript
  module.exports = {
    root: true,
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
    root: true,
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
    root: true,
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
6. Handle "Parse errors in imported module 'react-native': ';' expected."  
  React Native has an outstanding [issue](https://github.com/facebook/react-native/issues/28549) 
  which can cause this error. If this occurs add this to your `.eslintrc.js`
  ```diff
  module.exports = {
    root: true,
    extends: ["eslint-config-zero41-react-native"],
  +  settings: {
  +    'import/ignore': ['react-native'],
  +  }
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  };
  ```
  
## Other ESLint Configs
- Standard ESLint for Zero41 Projects: [eslint-config-zero41](https://github.com/Zero41/eslint-config-zero41)
- Standard ESLint for React Zero41 Projects: [eslint-config-zero41-react](https://github.com/Zero41/eslint-config-zero41-react)
