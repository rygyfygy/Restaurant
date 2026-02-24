export function renderAboutUs() {
  const section = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = "About us";

  const p1 = document.createElement("p");
  p1.textContent =
    "We are a family-run restaurant focused on seasonal ingredients and classic technique.";

  const p2 = document.createElement("p");
  p2.textContent =
    "Our team serves a small menu that changes often, with recipes inspired by local markets.";

  section.append(header, p1, p2);
  return section;
}
