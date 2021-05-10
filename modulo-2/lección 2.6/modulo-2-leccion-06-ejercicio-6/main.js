'use strict';

const object = {
    name: 'Cesta de peras',
    maxNum: 20,
    minNum: 5,
    currentNum: 12,
    startNum: 15,
};

object.add = function() {
    this.currentNum = this.currentNum + 1;
    return 'Tienes ' + this.currentNum;
};

console.log(object.add());

object.remove = function () {
    this.currentNum = this.currentNum -1;
    return 'Tienes ' + this.currentNum;
}

console.log(object.remove());

object.reset = function () {
    this.currentNum = this.startNum;
    return 'Tienes ' + this.currentNum;
}

console.log(object.reset());