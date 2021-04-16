"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharCollection_1 = require("./CharCollection");
// const numCollection = new NumCollection( [10, 3, 5, 0])
// const sorter = new Sorter(numCollection)
// sorter.sort()
var charCollection = new CharCollection_1.CharCollection('Xaayb');
var sorter = new Sorter_1.Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);
