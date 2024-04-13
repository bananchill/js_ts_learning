// {
//     '2023': ['07-10'],
//     '2024': ['01-31', '01-20']
//   }
function groupBy(_items, _fn) {
    var newObj = {};
    for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
        var iterator = _items_1[_i];
        var result = _fn(iterator);
        var objkey = Object.keys(result)[0];
        if (!newObj[objkey]) {
            newObj[objkey] = [result[objkey]];
            continue;
        }
        if (typeof newObj[objkey] === "string") {
            newObj[objkey] = [newObj[objkey], result[objkey]];
        }
        else {
            newObj[objkey].push(result[objkey]);
        }
    }
    return newObj;
}
var callbackGroupByYear = function (_element) {
    var _a;
    var year = _element.date.slice(0, 4);
    var otherDate = _element.date.slice(5);
    return _a = {},
        _a[year] = otherDate,
        _a;
};
var groupByYear = function (_data) {
    return groupBy(_data, callbackGroupByYear);
};
console.log(groupByYear([
    { date: '2023-07-10', amount: '100' },
    { date: '2024-01-31', amount: '800' },
    { date: '2024-01-20', amount: '900' }
]));
