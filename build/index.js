"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumCollection_1 = require("./NumCollection");
var numCollection = new NumCollection_1.NumCollection([10, 3, 5, 0]);
var sorter = new Sorter_1.Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);
