const button = document.querySelector('#submit');
const input = document.querySelector('#favchap');
const list = document.querySelector('.list');

button.onclick = function newItem() {
    let data = input.value;
    input.textContent = '';
    if (data != '') {
        const listItem = document.createElement('li');
        const newP = document.createElement('p');
        const newButton = document.createElement('button');
        listItem.appendChild(newP);
        listItem.appendChild(newButton);
        newP.textContent = data;
        newButton.textContent = 'Delete';
        list.appendChild(listItem);

        newButton.onclick = function() {
            list.removeChild(listItem);
        }
        input.focus();
    }
}

input.onK