console.log("NODE js working. Русские символы");


/**
 * Функция должна создать элемент с тегом DIV, поместить в него текстовый узел и вернуть получившийся элемент
 *
 * @param {string} text - текст, который необходимо поместить в div
 * @return {Element}
 */
function createDivWithText(text) {
    var elem = document.createElement('div');
    elem.textContent = text;
    //console.log(elem);
    return elem;
}

createDivWithText("hello");

/**
 * Функция должна создать элемент с тегом A, установить значение для атрибута href и вернуть получившийся элемент
 *
 * @param {string} hrefValue - значение для атрибута href
 * @return {Element}
 */
function createAWithHref(hrefValue) {
    var elem = document.createElement('a');
    elem.setAttribute("href", hrefValue);
    return elem;
}

createAWithHref("#");

/**
* Функция должна вставлять элемент what в начало элемента where
*
* @param {Element} what - что вставлять
* @param {Element} where - куда вставлять
*/
function prepend(what, where) {
    //wrap.insertBefore(what, wrap.children[0]);
    where.insertBefore(what, where.firstChild);
}

}
/**
 * Функция должна перебрать все дочерние элементы элемента where
 * и вернуть массив, состоящий из тех дочерних элементов
 * следующим соседом которых является элемент с тегом P
 * Рекурсия - по желанию
 *
 * @param {Element} where - где искать
 * @return {Array<Element>}
 *
 * @example
 * для html '<div></div><p></p><a></a><span></span><p></p>'
 * функция должна вернуть: [div, span]
 * т.к. следующим соседом этих элементов является элемент с тегом P
 */
//console.log(elem);
//console.log(elem.children[27] == undefined);
//console.log(elem.children[25] == elem.lastElementChild);
//console.log(elem.children[26] == undefined);
//console.log(elem.lastElementChild);
// if (elem.children[i].nextElementSibling === ) {}
//console.log(elem.children[i].nextElementSibling);
//console.log(elem.children[i].nextElementSibling.tagName);

// for (var i = 0; i <= 26; i++) {
//     console.log(elem.children[i]);
// }

function findAllPSiblings(where) {
    var elem = document.querySelector(where);
    console.log(elem);
    console.log(elem.children[26]);
    console.log(elem.children[26] == elem.lastElementChild);
    var i = -1;
    function recursion() {
        i++;
        if (elem.children[i] != elem.lastElementChild) {
            console.log(i + "i: " + (elem.children[i] == elem.lastElementChild));
            console.log(elem.children[i].nextElementSibling);
            console.log(elem.children[i].nextElementSibling.tagName);
            recursion();
        }
        else
        {
            console.log(i + "i(последний): " + (elem.children[i] == elem.lastElementChild));
        }
    }
    recursion();


}

findAllPSiblings(".hints");
// Clear Varianr
function CLRfindAllPSiblings(where) {
    var elem = document.querySelector(where);
    var i = -1;
    var result = [];
    function recursion() {
        i++;
        if (elem.children[i] != elem.lastElementChild) {
            if (elem.children[i].nextElementSibling.tagName == "LI") {
                result.push(elem.children[i].tagName);
            }
            recursion();
        }
        else
        {
            console.log(i + "i(последний): " + (elem.children[i] == elem.lastElementChild));
        }
    }
    recursion();

    return result;
}
//CLRfindAllPSiblings(".hints");

/**
 * Функция должна перебрать все дочерние узлы типа "элемент" внутри where
 * и вернуть массив, состоящий из текстового содержимого перебираемых элементов
 * Но похоже, что в код закралась ошибка, которую нужно найти и исправить
 *
 * @param {Element} where - где искать
 * @return {Array<string>}
 */
function findError(where) {

    var my = document.querySelector(where);
    var result = [];
    console.log(my.children.length);
    for (var i = 0; i < my.children.length; i++) {
        result.push(my.children[i].innerText);
    }

    return result;

}
findError(".hints");

/**
 * Функция должна перебрать все дочерние узлы элемента where
 * и удалить из него все текстовые узлы
 * Без рекурсии!
 * Будьте внимательны при удалении узлов,
 * можно получить неожиданное поведение при переборе узлов
 *
 * @param {Element} where - где искать
 *
 * @example
 * после выполнения функции, дерево <div></div>привет<p></p>loftchool!!!
 * должно быть преобразовано в <div></div><p></p>
 */

/*

 function  testCount(elem) {
 var my = document.querySelector(elem);
 console.log(my.childNodes)
 console.log(my.childNodes.length)
 console.log(my.children)
 console.log(my.children.length)
 }

 testCount(".hints");





 function  test(elem) {
 var my = document.querySelector(elem);
 for (let i=0; i < my.childNodes.length; i++) {
 if (my.childNodes[i].nodeType == 3) {
 let thisNode = my.childNodes[i];
 my.removeChild(thisNode);
 console.log("Мы нашли текстовый узел")
 }
 console.log(my.childNodes[i].nodeType)
 }
 }

 test(".hints");
 */
function deleteTextNodes(where) {
    for (let i=0; i < where.childNodes.length; i++) {
        if (where.childNodes[i].nodeType == 3) {
            let thisNode = where.childNodes[i];
            where.removeChild(thisNode);
        }
    }

}

/**
 * Выполнить предудыщее задание с использование рекурсии
 * то есть необходимо заходить внутрь каждого дочернего элемента
 *
 * @param {Element} where - где искать
 *
 * @example
 * после выполнения функции, дерево <span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>
 * должно быть преобразовано в <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(where) {
    var my = document.querySelector(where);
    var i;

    function recursion(elem, i = 0) {

        let thisNode = elem.childNodes[i];

        console.log("текущий элемент " + elem.tagName, "текущее  i: " + i, "текущий элемент (ниже, если он не текстовый)")
        //console.log("количество нодов: " + elem.childNodes.length)
        console.log(thisNode);


        if (i == elem.childNodes.length) {
            console.log("количество нодов равно текущей итерации i, возвращаемся наверх");
            return;
        }

        if (elem.childNodes[i].nodeType == 1) {
            if (thisNode.childNodes.length > 0 ) {
                console.log("у этого элемента внутри что-то есть, входим во внутрь"); // в этот момент мы должны записать текущий элемент и вызвать рекурсий относительно него
                i++;
                recursion(thisNode);
            }
        }
        else {
            console.log("Удаленный узел: " + thisNode.nodeValue);
            elem.removeChild(thisNode);
        }
        //console.log("новое  i: " + i)
        recursion(elem, i);
    }
    recursion(my);
}
deleteTextNodesRecursive(".hints");

function CLEARdeleteTextNodesRecursive(where) {
    var i;

    function recursion(elem, i = 0) {

        let thisNode = elem.childNodes[i];

        console.log("текущий элемент " + elem.tagName, "текущее  i: " + i, "текущий элемент (ниже, если он не текстовый)")
        console.log(thisNode);


        if (i == elem.childNodes.length) {
            return;
        }

        if (elem.childNodes[i].nodeType == 1) {
            if (thisNode.childNodes.length > 0 ) {
                console.log("у этого элемента внутри что-то есть, входим во внутрь");
                i++;
                recursion(thisNode);
            }
        }
        else {
            console.log("Удаленный узел: " + thisNode.nodeValue);
            elem.removeChild(thisNode);
        }
        recursion(elem, i);
    }
    recursion(where);
}

/**
 * *** Со звездочкой ***
 * Необходимо собрать статистику по всем узлам внутри элемента root и вернуть ее в виде объекта
 * Статистика должна содержать:
 * - количество текстовых узлов
 * - количество элементов каждого класса
 * - количество элементов каждого тега
 * Для работы с классами рекомендуется использовать свойство classList
 * Постарайтесь не создавать глобальных переменных
 *
 * @param {Element} root - где собирать статистику
 * @return {{tags: Object<string, number>, classes: Object<string, number>, texts: number}}
 *
 * @example
 * для html <div class="some-class-1"><b>привет!</b> <b class="some-class-1 some-class-2">loftschool</b></div>
 * должен быть возвращен такой объект:
 * {
 *   tags: { DIV: 1, B: 2},
 *   classes: { "some-class-1": 2, "some-class-2": 1 },
 *   texts: 3
 * }
 */
function collectDOMStat(root) {
    var my = document.querySelector(root);
    var obj = {
        classes: {},
        tags: {},
        texts: 0
    }

    function recursion(elem, i = 0) {
        let thisNode = elem.childNodes[i];


        if (i == elem.childNodes.length) {
            return;
        }

        if (thisNode.nodeType == 1) {
            //console.log("текущий элемент " + elem.tagName, "текущее  i: " + i, "текущий элемент (ниже, если он не текстовый)")
            //if  (thisNode.tagName == "P") console.warn("нашли P");

            for (let y = 0; y < thisNode.classList.length; y++) {
                //console.log(thisNode.classList[y]);
                if  (obj.classes.hasOwnProperty(thisNode.classList[y])) {
                    console.log("есть такой класс");
                    obj.classes[thisNode.classList[y]] += 1;
                }
                else {
                    obj.classes[thisNode.classList[y]] = 1;
                    console.log("такого класса нет, добавили " + thisNode.classList[y]);
                }

            }

            if (thisNode.childNodes.length > 0 ) {
                //console.log("у этого элемента внутри что-то есть, входим во внутрь");
                if  (obj.tags.hasOwnProperty(thisNode.tagName)) { //console.log("есть такое свойство");
                    obj.tags[thisNode.tagName] += 1;
                }
                else {
                    obj.tags[thisNode.tagName] = 1;
                    console.log("такого свойства нет, добавили " + thisNode.tagName);
                }


                recursion(thisNode);
            }
        }
        else {
            //console.log("Текстовый узел: " + thisNode.nodeValue);
            obj.texts += 1;
        }

        i++;
        recursion(elem, i);
    }
    recursion(my);
    return obj;
}
collectDOMStat(".hints");
