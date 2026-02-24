export function renderMenu() {
  const section = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = "Menu";

  const item1 = document.createElement("p");
  item1.textContent = "Chef's steak with roasted vegetables";

  const item2 = document.createElement("p");
  item2.textContent = "Shrimp rice bowl with herbs";

  const item3 = document.createElement("p");
  item3.textContent = "Seasonal dessert";

  section.append(header, item1, item2, item3);
  return section;
}
