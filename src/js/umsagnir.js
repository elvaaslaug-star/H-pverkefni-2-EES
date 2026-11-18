/*keyrir lista af umsögnum á umsagnir.html, les, síar, raðar og birtir*/

/* sækir umsagnir og birtir þær á umsagnir.html */

import { saekjaGogn } from "./storage.js";
import { teiknaLista } from "./list.js";

const main = document.querySelector('main');
if (main){
    const listiContainer = document.createElement('div');
    listiContainer.classList.add('umsagnir-listi');
    main.appendChild(listiContainer);

    const gogn = saekjaGogn([]);
    teiknaLista(gogn, listiContainer);
}