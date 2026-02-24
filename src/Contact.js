export function renderContact() {
  const section = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555) 010-1234";

  const email = document.createElement("p");
  email.textContent = "Email: hello@ristorante.example";

  section.append(header, phone, email);
  return section;
}
