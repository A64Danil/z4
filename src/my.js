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
    /*
     var result = [];

     for (var i = 0; i < where.childNodes.length; i++) {
     result.push(where.childNodes[i].innerText);
     }

     return result;
     */
}