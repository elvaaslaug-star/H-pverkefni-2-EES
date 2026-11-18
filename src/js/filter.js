/* leit og síun á umsögnum */

export function saekjaTegundir(gogn) {
  return [...new Set(gogn.map((stak) => stak.tegund))];
}

// valkostir
export function siaOgRada(gogn, valkostir) {
  const { tegund, einkunn, rada } = valkostir;

     const listinn = gogn.filter(stak => {
        const passarTegund = tegund === 'allt' || stak.tegund === tegund;
        const passarEinkunn =
            einkunn === 'allt' || Number(stak.einkunn) === Number(einkunn);
        return passarTegund && passarEinkunn;
    });

  if (rada === "nyjast") listinn.reverse();

    return listinn;
}
