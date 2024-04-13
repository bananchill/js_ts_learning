let cat = {
    name: 'Tom',
    isHunter: true
}

let mouse = {
    name: 'Jerry',
    isHunter: false
}

mouse = cat;
cat.isHunter = false;
mouse.isHunter = undefined;

console.log(mouse.isHunter);