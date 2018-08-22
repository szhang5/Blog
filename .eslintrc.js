module.exports = {
    "extends": "airbnb",
    "rules": {
    	"arrow-body-style": 0,
	    "comma-dangle": 0,
	    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
	    "import/no-named-as-default": 0,
	    "import/named": 2,
	    "max-len": [1, { "code": 120 }],
	    "no-alert": 0,
	    "no-plusplus": 0,
	    "arrow-parens": 0,
	    "generator-star-spacing": 0,
	    "no-underscore-dangle": 0,
	    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
	    "react/forbid-prop-types": [2, { "forbid": [ "any", "array"] }],
	    "react/jsx-filename-extension": 0
    }
};