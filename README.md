# cb-bufferify [![Support this project][donate-now]][paypal-donations]

Convert any async function to a cb-buffer handler.

## Installation

```sh
$ npm i cb-bufferify
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

MIT © [Ionică Bizău][website]

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
