module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint:recommended",
        // "plugin:react/recommended",
        // "plugin:import/errors",
        // "plugin:import/warnings",
        // "plugin:jsx-a11y/recommended"
    ],
    "globals": {},
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "rules": {
        // "react/jsx-uses-react": 1,
        // "react/jsx-no-undef": 2,
        // "react/jsx-wrap-multilines": 2,
    },
    "plugins": [
        // "react",
        // "jsx-a11y",
        // "jest"
    ],
    "settings": {
        // "import/resolver": "webpack",
        // "import/extensions": [".js", ".jsx"]
    }
}
