"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Faça um algoritmo que gere numeros aleatorios e some apenas aqueles que forem pares
var nums;
nums = [];
var somaPares = 0;
for (var i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random() * 100));
    if (nums[i] % 2 == 0) {
        somaPares += nums[i];
    }
}
console.log("Numeros gerados = " + nums);
console.log("Soma de apenas os pares = " + somaPares);
