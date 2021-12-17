document.addEventListener('DOMContentLoaded', () => {
    alert('The DOM has been loaded.');

    const redInput = document.getElementById('red-input');
    redInput.addEventListener('change', (e) => {
        if (e.target.value.trim().toLowerCase() === 'red') {
            redInput.style.backgroundColor = 'red';
        }else {
            redInput.style.backgroundColor = 'transparent';
        }
    })

    const addItem = document.getElementById('add-item');
    addItem.addEventListener('click', () => {
        const listAdd = document.getElementById('list-add');
        const li = document.createElement('li');
        li.innerText = listAdd.value;
        document.getElementsByTagName('ul')[0].append(li);
        listAdd.value = '';
    })

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('change', e => {
        const section = document.getElementById('part-3');
        section.style.backgroundColor = e.target.value;
    })
    const removeListeners = document.getElementById('remove-listeners');
    removeListeners.addEventListener('click', e => {
        redInput.removeEventListener('input', (e) => {
            if (e.target.value.trim().toLowerCase() === 'red') {
                redInput.style.backgroundColor = 'red';
            }else {
                redInput.style.backgroundColor = 'transparent';
            })
        addItem.removeEventListener('click', () => {
            const listAdd = document.getElementById('list-add');
            const li = document.createElement('li');
            li.innerText = listAdd.value;
            document.getElementsByTagName('ul')[0].append(li);
            listAdd.value = '';
        })
        colorSelect.removeEventListener('change', e => {
            const section = document.getElementById('part-3');
            section.style.backgroundColor = e.target.value;
        })
    })
})
