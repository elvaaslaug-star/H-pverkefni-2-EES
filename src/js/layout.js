const TITLE = "Umsagnar vefurinn";

const LINKS = [
  { text: "Forsíða", href: "/index.html" },
  { text: "Umsagnir", href: "/src/sidur/umsagnir.html" },
  { text: "Bæta við umsögn", href: "/src/sidur/ny-umsogn.html" },
];

const AUTHORS = [
  "Elísa Guðrún Guðjónsdóttir,",
  "Elva Áslaug Sævarsdóttir og",
  "Sigrún Helga Hauksdóttir",
];

function createHeader() {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = TITLE;

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (const link of LINKS) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.append(a);
    ul.append(li);
  }

  nav.append(ul);
  header.append(h1, nav);
  return header;
}

function createFooter() {
  const footer = document.createElement("footer");

  /* titill og copyright til vinstri */
  const copyright = document.createElement("p");
  copyright.textContent = `© 2026 ${TITLE}`;

  /* höfundar til hægri og merkt "breakpoints" */
  const authors = document.createElement("p");
  authors.append("Höfundar:");
  for (const name of AUTHORS) {
    authors.append(document.createElement("br"), name);
  }

  footer.append(copyright, authors);
  return footer;
}

/* bæta við header og footer á síðunnar */
export function renderLayout() {
  let main = document.querySelector("main");

  if (!main) {
    main = document.createElement("main");
    document.body.appendChild(main);
  }

  document.body.prepend(createHeader());
  document.body.append(createFooter());

  return main;
}
