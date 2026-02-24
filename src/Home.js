export function renderHome() {
  const section = document.createElement("div");

  const homeHeader = document.createElement("h2");
  homeHeader.textContent = "Chef's select";
  homeHeader.id = "h2";

  const p1 = document.createElement("p");
  p1.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

  const p2 = document.createElement("p");
  p2.textContent =
    "Et molestiae quas exercitationem ipsa voluptas impedit tenetur necessitatibus neque unde! Libero consequatur dolor dolorem sequi soluta ullam impedit rerum architecto dicta?";

  const p3 = document.createElement("p");
  p3.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

  section.append(homeHeader, p1, p2, p3);
  return section;
}
