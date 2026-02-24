export function renderGallery() {
  const section = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = "Gallery";

  const text = document.createElement("p");
  text.textContent = "A quick look at some of our most loved dishes.";

  section.append(header, text);
  return section;
}
