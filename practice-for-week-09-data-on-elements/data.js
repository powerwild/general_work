window.addEventListener('DOMContentLoaded', e => {
    const shoppingList = document.getElementById('shopping-list');
    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault();
        const name = document.getElementById('name');
        const type = document.getElementById('type');
        const li = document.createElement('li');
        li.innerText = name.ariaValueMax;
        li.dataset.type = type.ariaValueMax;
        shoppingList.append(li);
        if (li.dataset.type === 'drinks') {
            li.style.backgroundColor = 'red';
        }
        name.value = '';
        type.value = 'drinks';
    })
})
