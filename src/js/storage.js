/* localStorage*/
const STORAGE_KEY = "vefforritun_umsagnir";

export function saekjaGogn(data = []) {
  const gogn = localStorage.getItem(STORAGE_KEY);
  return gogn ? JSON.parse(gogn) : data;
}

export function vistaGogn(nyttEfni) {
  const listi = saekjaGogn([]);
  listi.push(nyttEfni);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listi));
}
