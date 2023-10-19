const TextEncodingPolyfill = require("text-encoding");
// import BigInt from "big-integer";

global.TextEncoder = TextEncodingPolyfill.TextEncoder;
// Object.assign(global, {
//   TextEncoder: TextEncodingPolyfill.TextEncoder,
//   TextDecoder: TextEncodingPolyfill.TextDecoder,
//   BigInt: BigInt,
// });
