"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumCollection = void 0;
var NumCollection = /** @class */ (function () {
    function NumCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    NumCollection.prototype.swap = function (leftIdx, rightIdx) {
        var leftHand = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = leftHand;
    };
    return NumCollection;
}());
exports.NumCollection = NumCollection;
