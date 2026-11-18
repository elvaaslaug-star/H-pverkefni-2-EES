/*keyrir lista af umsögnum á umsagnir.html, les, síar, raðar og birtir*/

import { saekjaGogn } from "./storage.js";
import { teiknaLista } from "./list.js";
import { saekjaTegundir, siaOgRada } from "./filter.js";

function buaTilVal(valkostir) {
  const val = document.createElement("select");
  valkostir.forEach(([gildi, texti]) => {
    const valkostur = document.createElement("option");
    valkostur.value = gildi;
    valkostur.textContent = texti;
    val.appendChild(valkostur);
  });
  return val;
}

const main = document.querySelector("main");
if (main) {
  const gogn = saekjaGogn([]);

  console.log("Gögn sótt:", gogn);
  const tegundVal = buaTilVal([
    ["allt", "Allar tegundir"],
    ...saekjaTegundir(gogn).map((t) => [t, t]),
  ]);

  const einkunnaValkostir = [["allt", "Allar einkunnir"]];
  for (let i = 1; i <= 10; i++) {
    einkunnaValkostir.push([String(i), `Einkunn ${i}`]);
  }
  const einkunnVal = buaTilVal(einkunnaValkostir);

  const radaVal = buaTilVal([
    ["nyjast", "Nýjast efst"],
    ["elst", "Elst efst"],
  ]);

  const stjorna = document.createElement("div");
  stjorna.classList.add("stjorna-umsognum");
  stjorna.append(tegundVal, einkunnVal, radaVal);

  const listiContainer = document.createElement("div");
  listiContainer.classList.add("umsagnir-listi");

  main.appendChild(stjorna);
  main.appendChild(listiContainer);

  function uppfaera() {
    const listinn = siaOgRada(gogn, {
      tegund: tegundVal.value,
      einkunn: einkunnVal.value,
      rada: radaVal.value,
    });
    teiknaLista(listinn, listiContainer);
  }

  [tegundVal, einkunnVal, radaVal].forEach((val) =>
    val.addEventListener("change", uppfaera),
  );

  uppfaera();
}
