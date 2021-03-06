module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "standard",
      "plugin:vue/essential",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};