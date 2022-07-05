function shiftCount(data, n) {
    if (n === 0) {
        return [];
    }
    let countObj = {};
    let numbersTBeRemoved = [];
    // counting the repeated number
    for (let i = 0; i < data.length; i++) {
        if (!countObj[data[i]]) {
            countObj[data[i]] = 1;
        } else {
            countObj[data[i]]++;
        }
    }
    // separating the numbers which is repeated more than n times
    for (const key in countObj) {
        if (countObj[key] > n) {
            numbersTBeRemoved.push(parseInt(key));
        }
    }
    if (numbersTBeRemoved.length === 0) {
        return data;
    }
    // removing the duplicate items
    const result = data.filter((element) => !numbersTBeRemoved.includes(element));
    return result;
}

console.log(shiftCount( [1, 2, 3], 6));
