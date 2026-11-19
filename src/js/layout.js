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
  }

  document.body.prepend(createHeader());
  document.body.append(main);
  document.body.append(createFooter());

  return main;
}

export function renderReviews() {
  const main = document.querySelector("main");

  if (!main) return;

  const header = document.createElement("h2");
  header.textContent = "Velkominn á umsagnavefinn!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Hér getur þú skoðað nokkrar af þínum glæsilegu umsögnum!";

  const reviewsContainer = document.createElement("div");
  reviewsContainer.id = "reviews-container";

  const sortLabel = document.createElement("label");
  sortLabel.htmlFor = "sort";
  sortLabel.textContent = "Raða eftir: ";

  const select = document.createElement("select");
  select.id = "sort";

  const options = [
    { value: "title-asc", text: "Titill (A-Z)" },
    { value: "title-desc", text: "Titill (Z-A)" },
    { value: "author-asc", text: "Höfundur (A-Z)" },
    { value: "rating-desc", text: "Einkunn (Hæsta fyrst)" },
    { value: "rating-asc", text: "Einkunn (Lægsta fyrst)" },
  ];

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    select.appendChild(option);
  });

  const reviewsContainerWrapper = document.createElement("div");
  reviewsContainerWrapper.id = "reviews-container-wrapper";

  reviewsContainerWrapper.append(sortLabel, select, reviewsContainer);
  main.append(header, paragraph, reviewsContainerWrapper);
}
