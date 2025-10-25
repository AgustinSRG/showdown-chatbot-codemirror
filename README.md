# ModeMirror bundle for Showdown-ChatBot

This repository is meant to create a [CodeMirror](https://codemirror.net/) bundle for []().

This bundle will be used for the addons text areas in the consol panel.

## Building

Install dependencies:

```sh
npm install
```

Build:

```sh
npm run build
```

## Usage

In order to install it, run:

```sh
npm install --save @asanrom/showdown-chatbot-codemirror
```

Example usage:

```js
const CodeMirrorBundle = require("@asanrom/showdown-chatbot-codemirror");

const bundleFile = CodeMirrorBundle.getBundlePath();

console.log(bundleFile); /// Example value: /path/to/bundle.js
```
