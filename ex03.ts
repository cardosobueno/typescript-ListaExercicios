export { }

let nums: number[];
nums = [];
let somaPares = 0;

for (let i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random() * 100));

    if (nums[i] % 2 == 0) {
        somaPares += nums[i];
    }

}
console.log("Numeros gerados = " + nums);
console.log("Soma de apenas os pares = "+ somaPares);

