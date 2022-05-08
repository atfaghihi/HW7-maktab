function deNest(array) {
    let arr = [];
    while (Array.isArray(array)) {
        arr.push([...array][0]);
        array = [...array][1];
    }
    arr.push(array);

    return arr.length;

}
let arr = [1, [2, [3, [4, [5, 6]]]]];
console.log(deNest(arr));