/*keyrir formið til þess að bæta við nýrri umsögn á ny-umsogn.html */

import { vistaGogn } from "./storage.js";

function buaTilForm() {
    const main = document.querySelector('main');
    if (!main) return;

    const form = document.createElement('form');
    form.classList.add('skraning-form');

    // Velja tegund hlutinn
    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Tegund:';
    const typeSelect = document.createElement('select');
    typeSelect.name = 'type';
    typeSelect.required = true;

    const tegundir = [
        'Sjónvarpsþættir/þáttur',
        'Kvikmynd',
        'Tónlistaralbúm',
        'Bók',
        'Tölvuleikur',
        'Borðspil',
    ];

    tegundir.forEach((tegund) => {
        const option = document.createElement('option');
        option.value = tegund;
        option.textContent = tegund;
        typeSelect.appendChild(option);
    });

    const titillLabel = document.createElement('label');
    titillLabel.textContent = 'Titill:';
    const titillInput = document.createElement('input');
    titillInput.type = 'text';
    titillInput.name = 'titill';
    titillInput.required = true;

    const hofundurLabel = document.createElement('label');
    hofundurLabel.textContent = 'Höfundur:';
    const hofundurInput = document.createElement('input');
    hofundurInput.type = 'text';
    hofundurInput.name = 'höfundur';
    hofundurInput.required = true;

    const einkunnLabel = document.createElement('label');
    einkunnLabel.textContent = 'Einkunn:';
    const einkunnInput = document.createElement('input');
    einkunnInput.type = 'number';
    einkunnInput.name = 'einkunn';
    einkunnInput.min = 1;
    einkunnInput.max = 10;
    einkunnInput.required = true;

    const byrjaLabel = document.createElement('label');
    byrjaLabel.textContent = 'Hvenær var byrjað: ';
    const byrjaInput = document.createElement('input');
    byrjaInput.type = 'date';
    byrjaInput.name = 'byrjad';

    const lokidLabel = document.createElement('label');
    lokidLabel.textContent = 'Hvenær var lokið: ';
    const lokidInput = document.createElement('input');
    lokidInput.type = 'date';
    lokidInput.name = 'lokid';

    const umsognLabel = document.createElement('label');
    umsognLabel.textContent = 'Umsögn:';
    const umsognInput = document.createElement('textarea');
    umsognInput.name = 'umsogn';
    umsognInput.rows = 5;

    const takki = document.createElement('button');
    takki.type = 'submit';
    takki.textContent = 'Skrá umsögn';

    form.append(
        typeLabel, typeSelect,
        titillLabel, titillInput,
        hofundurLabel, hofundurInput,
        einkunnLabel, einkunnInput,
        byrjaLabel, byrjaInput,
        lokidLabel, lokidInput,
        umsognLabel, umsognInput,
        takki,
    );

    main.appendChild(form);


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nyttEfni = {
            id: Date.now(),
            tegund: typeSelect.value,
            titill: titillInput.value.trim(),
            hofundur: hofundurInput.value.trim(),
            einkunn: parseInt(einkunnInput.value, 10),
            byrjad: byrjaInput.value,
            lokid: lokidInput.value,
            umsogn: umsognInput.value.trim(),
        };
        vistaGogn(nyttEfni);
        form.reset();
});
}

buaTilForm();