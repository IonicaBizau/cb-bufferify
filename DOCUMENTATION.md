## Documentation

You can see below the API reference of this module.

### `cbBufferify(fn, args)`
Converts the provided function into a [`cb-buffer`](https://github.com/jillix/node-cb-buffer) handler.

#### Params

- **Function** `fn`: The async function to convert into cb-buffer handler.
- **Array** `args`: Array of arguments to pass to the original function when calling it.

#### Return
- **Function** The `cb-buffer` handler.

