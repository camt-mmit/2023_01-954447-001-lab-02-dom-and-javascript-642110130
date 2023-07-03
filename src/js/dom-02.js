function createElement(){
    const container = document.createElement('div');
    const label = document.createElement('label');
    const title = document.createElement('b');
    const input = document.createElement('input');

    const inputElement = [...document.querySelectorAll('.app-cmp-input')];
    title.textContent = `Number ${inputElement.length + 1}`;
    input.type = 'Number';
    input.setAttribute('value','0')
    input.classList.add('app-cmp-input');

    input.addEventListener('change', () => {
        const result = [...document.querySelectorAll('.app-cmp-input')].reduce((carry, elem) => carry + elem.valueAsNumber, 0);

        document.querySelector(
            'output.app-cmp-result',
        ).value = `${result.toLocaleString()}`;
    });

label.append(title)
label.append(input)
container.append(label)

return container;
}

//

document.addEventListener('DOMContentLoaded', () => {
    const inputsList = document.querySelector('.app-cmp-input-list');
    const addCommand = document.querySelector('.app-cmd-add-input');

    addCommand.addEventListener('click', () => 
    inputsList.append(createElement()),
    );

    inputsList.append(createElement());
});