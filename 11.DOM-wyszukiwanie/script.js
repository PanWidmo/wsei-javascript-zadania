//Task 1
const elements = document.getElementsByClassName('list');
console.log(elements);

//Task 2
function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');

//Task 3
const element = document.getElementById('list');

console.log(element);

//Task 4
function showElements(elements) {
    console.log(elements);
}

showElements(
    searchElements('li')
);
showElements(
    searchElements('ul')
);
showElements(
    searchElements('span')
);
showElements(
    searchElements('div.list span')
);
showElements(
    searchElements('div#spans span')
);
