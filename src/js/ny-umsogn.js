/*keyrir formið til þess að bæta við nýrri umsögn á ny-umsogn.html */

import { vistaGogn } from "./storage.js";

function buaTilForm() {
    const main = document.querySelector('main');
    if (!main) return;

    const form = document.createElement('form');
    form.classList.add('skraning-form');

    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Tegund:';
    const typeSelect = document.createElement('select');
    typeSelect.name = 'type';
    typeSelect.required = true;

    const tegundir = ['Bók', 'Kvikmynd', 'Leikrit', 'Tónlist'];
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

    const takki = document.createElement('button');
    takki.type = 'submit';
    takki.textContent = 'Skrá umsögn';

    form.append(
        titillLabel, titillInput,
        hofundurLabel, hofundurInput,
        einkunnLabel, einkunnInput,
        takki
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
        };
        vistaGogn(nyttEfni);
        form.reset();
});
}

buaTilForm();