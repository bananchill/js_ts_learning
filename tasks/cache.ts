function cacheFunction(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) { // Проверяем, есть ли уже результат в кэше
            cache[key] = func(...args); // Если нет, выполняем функцию и сохраняем результат в кэше
        }
        return cache[key];
    }
}

function sum(a, b) {
    return a + b
}

const cacheSum = cacheFunction(sum)


console.log(cacheSum(2,3))