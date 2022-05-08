function findIndex(string) {
    let arr = [...str];

    // let arr1 = arr.map((element) => {
    //     return arr.indexOf(element);
    // })
    // .filter((item, index) => {
    //     return arr.indexOf(item) !== index;
    // });

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                let value = arr[i];
                let key = [i, j];
                let result = [value, key];
                return Object.fromEntries(result.map((element) => (
                    [result[0], result[1]]
                )));
            }
        }
    }
}

let str = "AREDCBSDERD";

console.log(findIndex(str));