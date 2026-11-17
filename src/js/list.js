// býr til listann

export function buaTilSpjald(stak){
    const spjald = document.createElement('article');
    spjald.classList.add('efni-spjald');

    const titill = document.createElement('h2');
    titill.textContent = `${stak.titill} (${stak.tegund})`;

    const hofundur = document.createElement('p');
    hofundur.textContent = `Höfundur: ${stak.hofundur}`;

    const einkunn = document.createElement('p');
    einkunn.textContent = `Einkunn: ${stak.einkunn} / 10`;

    spjald.append(titill, hofundur, einkunn);
    
     if (stak.byrjad) {
        const byrjad = document.createElement('p');
        byrjad.textContent = `Byrjað: ${stak.byrjad}`;
        spjald.appendChild(byrjad);
    }

    if (stak.lokid) {
        const lokid = document.createElement('p');
        lokid.textContent = `Lokið: ${stak.lokid}`;
        spjald.appendChild(lokid);
    }

    if (stak.umsogn) {
        const umsogn = document.createElement('p');
        umsogn.textContent = `Umsögn: ${stak.umsogn}`;
        spjald.appendChild(umsogn);
    }

    return spjald;
}

export function teiknaLista(listi, container) {
    container.innerHTML = '';

    if (listi.length === 0) {
        const enginUmsogn = document.createElement('p');
        enginUmsogn.textContent = 'Engar umsagnir skráðar.';
        container.appendChild(enginUmsogn);
        return;
    }

    listi.forEach((stak) => {
        const spjald = buaTilSpjald(stak);
        container.appendChild(spjald);
    });
}