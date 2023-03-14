function add() {
    let space = document.getElementById('text');
    let text = space.value;
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'listItem');
    list.appendChild(listItem);
    listItem.innerHTML = text;
    let del = document.createElement('button');
    del.setAttribute('class', 'delbtn');
    del.innerHTML = 'delete';
    listItem.appendChild(del);
    del.addEventListener('click', remove)
    function remove() {
        list.removeChild(listItem);
    }
}

document.getElementById('button').addEventListener('click', add);