// {
//     '2023': ['07-10'],
//     '2024': ['01-31', '01-20']
//   }

type objOperation = {date:string, amount: string}

function groupBy<T>(_items: T[], _fn: Function) {
    let newObj = {};
    
    for (const iterator of _items) {
        const result = _fn(iterator);
        const objkey = Object.keys(result)[0];
        
        if(!newObj[objkey]) {
            newObj[objkey] = [result[objkey]]
            continue
        }

        if(typeof newObj[objkey] === "string") {
            newObj[objkey] = [newObj[objkey], result[objkey]]
         } else {  
              newObj[objkey].push(result[objkey])
         }
    }

    return newObj
}

const callbackGroupByYear = (_element: objOperation) => {
    const year = _element.date.slice(0,4);
    const otherDate = _element.date.slice(5);
    
    return {
        [year]: otherDate
    }
} 

const groupByYear = (_data: objOperation[])=> {
    return groupBy<objOperation>(_data, callbackGroupByYear);
}

console.log(groupByYear([
    { date: '2023-07-10', amount: '100' },
    { date: '2024-01-31', amount: '800' },
    { date: '2024-01-20', amount: '900' }
  ]
  ));