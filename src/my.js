console.log("NODE js working. Русские символы");

function conLog(val, index, array) {
    console.log(val + 2, "index: " + index, array);
}


/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {

    for (let i=0; i < array.length ; i++) {
        fn(array[i], i, array);

    }

}

//forEach(arr, conLog);

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let newArr = [];
    for (let i=0; i < array.length ; i++) {
        newArr[i] = fn(array[i], i, array);

    }
    return newArr;
}

//map(arr, conLog);

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */

function sum(sum, val) {
    sum += val;
    console.log(sum, "val: " + val);
    return sum;
}

function reduce(array, fn, initial) {
    var result = initial;

    if (!initial) {
        result = array[0];
        i++
    }
    for (let i=0; i < array.length ; i++) {
        result = fn(result, array[i], i, i, array);
    }
    return result;
}


//console.log(reduce(arr, sum));

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
    return obj;
}



//console.log(deleteProperty(bomj, "name"));


/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) return true
    else return false
}
//console.log(hasProperty(bomj, "name"));

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps2(obj, ...args) {
    var names = args;
    var result = [];
    console.log(names);

    for (let i=0; i < names.length ; i++) {
        if (obj.hasOwnProperty(names[i])) {
            console.log("Такое свойствой есть - " + obj[names[i]]);
            result.push(obj[names[i]]);
        }
        else {
            console.log("Такого свойства нет - " + obj[names[i]]);
        }
    }
    return result;

}
function getEnumProps(obj) {
    return Object.keys(obj)
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var names = Object.keys(obj);
    for (let i=0; i < names.length ; i++) {
        names[i] = names[i].toUpperCase();

    }
   return names;
}



var arr = [1,2,3,6,5,4,7,8,9];
var names = ['HTML', 'CSS', 'JavaScript'];


/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var newArr = [];
    var newArrIndex = 0;

    if (!from) from = 0;
    if (!to) to = array.length;

    if (from < 0) from = array.length + from;
    if (to < 0) to = array.length + to;

    for (i = from; i < to; i++) {
        newArr[newArrIndex] = array[i];
        newArrIndex++;
        //console.log("i: " + i + ", newArrIndex: " +newArrIndex + ", array[i]: " + array[i])
    }

    return newArr;
}

var myTarget = arr.slice(-6,-2);
var myResult = slice(arr, -6, -2);

Array.prototype.equals = function (array, strict) {
    if (!array)
        return false;

    if (arguments.length == 1)
        strict = true;

    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i], strict))
                return false;
        }
        else if (strict && this[i] != array[i]) {
            return false;
        }
        else if (!strict) {
            return this.sort().equals(array.sort(), true);
        }
    }
    return true;
}

//console.log(myTarget.equals(myResult));
//console.log();

var bomj = {
    name : "Danil",
    lastName : "Xr",
    sureName : "Aldrovich",
    age: 28
}

var bomjik = {
    name : "Danilka",
    age: 10
}
/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let user = obj;

    let proxy = new Proxy(user, {
        set(target, prop, value) {
        console.log("Попытка записи в " + prop + ", передаваемое значение " + value + ", старое значение " +  user[prop]);
        target[prop] = value * value;
        return true;
    }
    });

    return proxy;
}

createProxy(bomjik);
//bomjik.age = 5;
console.log("Возраст бомжа " + bomjik.age);

