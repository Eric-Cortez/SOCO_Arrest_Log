export function valueCount(arrestData, type) {
    let types = {};

    for (let i = 0; i < arrestData.length; i++) {
        let record = arrestData[i][type];
        if (!types[record]) {
            types[record] = 1
        } else {
            types[record] += 1
        }

    }
    return types
}