const TextEncodingPolyfill = require("text-encoding");

global.TextEncoder = TextEncodingPolyfill.TextEncoder;
