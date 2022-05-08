function findNumber(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) === Number(array[i])) {
            result.push(array[i]);
        } else {
            return [];
        }
    }
    return result;
}

let arr = ["a", "4", "r", "5"];
console.log(findNumber(arr));