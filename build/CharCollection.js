"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharCollection = void 0;
var CharCollection = /** @class */ (function () {
    function CharCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    CharCollection.prototype.swap = function (leftIdx, rightIdx) {
        var char = this.data.split('');
        var leftHand = char[leftIdx];
        char[leftIdx] = char[rightIdx];
        char[rightIdx] = leftHand;
        this.data = char.join('');
    };
    return CharCollection;
}());
exports.CharCollection = CharCollection;
