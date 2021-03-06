/* ДЗ 4 - работа с DOM */

/**
 * Функция должна создать элемент с тегом DIV, поместить в него текстовый узел и вернуть получившийся элемент
 *
 * @param {string} text - текст, который необходимо поместить в div
 * @return {Element}
 */
function createDivWithText(text) {
    var elem = document.createElement('div');
    elem.textContent = text;
    return elem;
}

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


/**
 * Функция должна вставлять элемент what в начало элемента where
 *
 * @param {Element} what - что вставлять
 * @param {Element} where - куда вставлять
 */


function prepend(what, where) {
    where.insertBefore(what, where.firstChild);
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
    //var elem = document.querySelector(where);
    var i = -1;
    var result = [];
    function recursion() {
        i++;
        if (where.children[i] != where.lastElementChild) {
            if (where.children[i].nextElementSibling.tagName == "P") {
                result.push(where.children[i]);

            }
            recursion();
        }
        else
        {
            //console.log(i + "i(последний): " + (where.children[i] == where.lastElementChild));
        }
    }
    recursion();

    return result;
}

/**
 * Функция должна перебрать все дочерние узлы типа "элемент" внутри where
 * и вернуть массив, состоящий из текстового содержимого перебираемых элементов
 * Но похоже, что в код закралась ошибка, которую нужно найти и исправить
 *
 * @param {Element} where - где искать
 * @return {Array<string>}
 */
function findError(where) {
    var result = [];
    //console.log(where.children.length);
    for (var i = 0; i < where.children.length; i++) {
        result.push(where.children[i].innerText);
    }

    return result;

}

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
    var i;
    function recursion(elem, i = 0) {

        let thisNode = elem.childNodes[i];

        //console.log("текущий элемент " + elem.tagName, "текущее  i: " + i, "текущий элемент (ниже, если он не текстовый)")
        //console.log(thisNode);


        if (i == elem.childNodes.length) {
            return;
        }

        if (elem.childNodes[i].nodeType == 1) {
            if (thisNode.childNodes.length > 0 ) {
                //console.log("у этого элемента внутри что-то есть, входим во внутрь");
                i++;
                recursion(thisNode);
            }
        }
        else {
           // console.log("Удаленный узел: " + thisNode.nodeValue);
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
    //var my = document.querySelector(root);
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
                    //console.log("есть такой класс");
                    obj.classes[thisNode.classList[y]] += 1;
                }
                else {
                    obj.classes[thisNode.classList[y]] = 1;
                    //console.log("такого класса нет, добавили " + thisNode.classList[y]);
                }

            }

            if (thisNode.childNodes.length > 0 ) {
                //console.log("у этого элемента внутри что-то есть, входим во внутрь");
                if  (obj.tags.hasOwnProperty(thisNode.tagName)) { //console.log("есть такое свойство");
                    obj.tags[thisNode.tagName] += 1;
                }
                else {
                    obj.tags[thisNode.tagName] = 1;
                    //console.log("такого свойства нет, добавили " + thisNode.tagName);
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
    recursion(root);
    return obj;
}

/**
 * *** Со звездочкой ***
 * Функция должна отслеживать добавление и удаление элементов внутри элемента where
 * Как только в where добавляются или удаляются элемента,
 * необходимо сообщать об этом при помощи вызова функции fn со специальным аргументом
 * В качестве аргумента должен быть передан объек с двумя свойствами:
 * - type: типа события (insert или remove)
 * - nodes: массив из удаленных или добавленных элементов (а зависимости от события)
 * Отслеживание должно работать вне зависимости от глубины создаваемых/удаляемых элементов
 * Рекомендуется использовать MutationObserver
 *
 * @param {Element} where - где отслеживать
 * @param {function(info: {type: string, nodes: Array<Element>})} fn - функция, которую необходимо вызвать
 *
 * @example
 * если в where или в одного из его детей добавляется элемент div
 * то fn должна быть вызвана с аргументов:
 * {
 *   type: 'insert',
 *   nodes: [div]
 * }
 *
 * ------
 *
 * если из where или из одного из его детей удаляется элемент div
 * то fn должна быть вызвана с аргументов:
 * {
 *   type: 'remove',
 *   nodes: [div]
 * }
 */
function observeChildNodes(where, fn) {


    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ( mutation.type == 'childList' ) {

                if (mutation.addedNodes.length >= 1) {
                    let obj = {
                        type: "insert",
                        nodes: [...mutation.addedNodes]
                    };
                    fn(obj);
                    console.log(obj);

                }

                if (mutation.removedNodes.length >= 1) {
                    let obj = {
                        type: 'remove',
                        nodes: [...mutation.removedNodes]
                    };
                    fn(obj);
                    console.log(obj); // <=== Почему не срабатывает если "nodes: mutation.removedNodes"  ?? =(

                }
            }
        });
    });

    var config = { attributes: true, childList: true, characterData: true, subtree: true };

    observer.observe(where, config);
}

export {
    createDivWithText,
    createAWithHref,
    prepend,
    findAllPSiblings,
    findError,
    deleteTextNodes,
    deleteTextNodesRecursive,
    collectDOMStat,
    observeChildNodes
};
