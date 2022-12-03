"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// src/main.ts
var import_kolmafia = require("kolmafia");
function main() {
  var input = (0, import_kolmafia.fileToBuffer)("input.txt").trim().split(/\n/g), count1 = 0;
  input.map(function(element) {
    return [element.slice(0, element.length / 2), element.slice(element.length / 2)];
  }).forEach(function(element) {
    for (var found2 = "", i2 = element[0].length; found2 === "" && i2--; )
      element[1].includes(element[0][i2]) && (found2 = element[0][i2]);
    found2.charCodeAt(0) < 97 ? count1 += found2.charCodeAt(0) - 38 : count1 += found2.charCodeAt(0) - 96;
  });
  for (var count2 = 0, i = 0; i < input.length; i += 3) {
    for (var found = "", j = input[i].length - 1; found === "" && j--; )
      input[i + 1].includes(input[i][j]) && input[i + 2].includes(input[i][j]) && (found = input[i][j]);
    found.charCodeAt(0) < 97 ? count2 += found.charCodeAt(0) - 38 : count2 += found.charCodeAt(0) - 96;
  }
  (0, import_kolmafia.print)("solution 1 is: " + count1), (0, import_kolmafia.print)("solution 2 is: " + count2);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
