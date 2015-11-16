// Dependencies
const CbBuffer = require("cb-buffer");

/**
 * cbBufferify
 * Converts the provided function into a [`cb-buffer`](https://github.com/jillix/node-cb-buffer) handler.
 *
 *
 * @name cbBufferify
 * @function
 * @param {Function} fn The async function to convert into cb-buffer handler.
 * @param {Array} args Array of arguments to pass to the original function when calling it.
 * @return {Function} The `cb-buffer` handler.
 */
module.exports = function cbBufferify (fn, args) {

    args = args || [];

    var _fn = function () {

        if (!arguments.length) { return; }

        var cb = arguments[arguments.length - 1];
        if (_fn.buffer.check(cb)) { return; }

        args.push(_fn.buffer.done.bind(_fn.buffer));
        fn.apply(_fn.buffer, args);
    };

    _fn.buffer = new CbBuffer();

    return _fn;
};
