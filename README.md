# Wire

This repository is part of the source code of Wire. You can find more information at [wire.com](https://wire.com) or by contacting opensource@wire.com.

You can find the published source code at [github.com/wireapp](https://github.com/wireapp).

For licensing information, see the attached LICENSE file and the list of third-party licenses at [wire.com/legal/licenses/](https://wire.com/legal/licenses/).

## babel-plugin-remove-jsx-attributes

This plugin removes attributes from JSX elements. This can be useful in situations where you want to have specific attributes removed for production.

### Requiremets

* [Babel](https://babeljs.io/)
* [Babel React preset](https://babeljs.io/docs/plugins/preset-react/)

## Usage

### Install

```bash
$ yarn add --dev babel-plugin-remove-jsx-attributes
# OR
$ npm install --save-dev babel-plugin-remove-jsx-attributes
```

### Configuration

When adding `babel-plugin-remove-jsx-attributes` to your `.babelrc` file, you can specify the patterns of attributes to remove by using the regular expression form.

```json
{
  "plugins": [
    [
      "remove-jsx-attributes",
      {"patterns": [
        '^myAttribute$'
      ]}
    ]
  ],
  "presets": ["react"]
}
```
In the example above `babel-plugin-remove-jsx-attributes` will remove all attributes that match the regular expression `^myAttribute$` before transpiling them to `React.createComponent`.


```javascript
import React from 'react';

const func = () => (<div className="myClass" myAttribute="value" />);
```

Would be transpiled to:

```javascript
import React from 'react';

const func = () => React.createElement("div", { className: "myClass" });
```

## Development

### Install

```bash
$ yarn
```

### Test

```bash
$ yarn test
```
