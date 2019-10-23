const globals = require("globals");
const rules = require("./rules");
module.exports = {
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "node": true,
    "browser": true
  },

  "plugins": [
    "import",
    "node",
    "promise",
    "standard"
  ],

  "globals": {
    "document": "readonly",
    "navigator": "readonly",
    "window": "readonly",
    ...globals.es2015
  },

  "rules": rules
}

