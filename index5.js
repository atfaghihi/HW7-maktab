function actArray(array) {
    let result1 = array.filter((item) => item > 30);
    console.log(result1);
    let result2 = array.find((item) => item < 15);
    console.log(result2);
    let result3 = array.slice(1, 4);
    console.log(result3);
    let result4 = array.splice(1, 2);
    console.log(result4);
    let result5 = array.some((item) => item > 90);
    console.log(result5);



}

const arr = [12, 34, 5, 78, 90];
actArray(arr);