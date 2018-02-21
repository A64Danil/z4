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

    var elem = what;
    console.log(elem.nodeName);
    //elem.textContent = "Generated TAG";
    //var wrap = document.getElementsByTagName(where);
    var wrap = document.querySelector(where);
    console.log(wrap);
    wrap.insertBefore(what, wrap.children[0]);
}
prepend("<li>hello</li>", ".hints")

function prepend(what, where) {
    console.log("What");
    console.log(what);
    console.log("Where");
    console.log(where);


    //var elem = document.createElement();
    //elem.textContent = "Generated TAG";

    //where.insertBefore(what, where.children[0]);


    //return wrap
}
