# cb-bufferify [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cb-bufferify.svg)](https://www.npmjs.com/package/cb-bufferify) [![Downloads](https://img.shields.io/npm/dt/cb-bufferify.svg)](https://www.npmjs.com/package/cb-bufferify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Convert any async function to a cb-buffer handler.

At [**@jillix**](https://github.com/jillix) we created
[`cb-buffer`](https://github.com/jillix/node-cb-buffer)–a low-level
library for callback buffering.

`cb-bufferify` (this library) abstracts the things a little: it takes as input
the async function and it returns another function that is a `cb-buffer` handler
you can call as many times you want, the first async function being called just once.

## Installation

```sh
$ npm i --save cb-bufferify
```

## Example

```js
// Dependencies
const bufferify = require("cb-bufferify");

// A function that returns a unique random number after one second
function getUniqueRand(prefix, callback) {
    setTimeout(() => {
        callback(prefix + Math.random());
    }, 1000);
}

// Bufferify the function, making it generate the number once, and
// call all the callback functions then
var fn = bufferify(getUniqueRand, ["Random number is: "]);

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815

fn(console.log);
// => Random number is: 0.3325996194034815
```

## Documentation

### `cbBufferify(fn, args)`
Converts the provided function into a [`cb-buffer`](https://github.com/jillix/node-cb-buffer) handler.

#### Params
- **Function** `fn`: The async function to convert into cb-buffer handler.
- **Array** `args`: Array of arguments to pass to the original function when calling it.

#### Return
- **Function** The `cb-buffer` handler.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md