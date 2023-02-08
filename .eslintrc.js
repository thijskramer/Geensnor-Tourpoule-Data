module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [{
        "files": ["*.yaml", "*.yml"],
        "plugins": ["yaml"],
        "extends": ["plugin:yaml/recommended"]
    }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
