import "./styles.css";
import { renderHome } from "./Home.js";
import { renderAboutUs } from "./AboutUs.js";
import { renderMenu } from "./Menu.js";
import { renderGallery } from "./gallery.js";
import { renderContact } from "./Contact.js";
import { getImg } from "./pageImages.js";

const content = document.querySelector("div#content");
const imageContainer = document.querySelector("#imageContainer");

const mainText = document.createElement("div");
mainText.id = "mainText";
content.insertBefore(mainText, imageContainer);

const image = document.createElement("img");
imageContainer.appendChild(image);

const renderers = {
  Home: renderHome,
  AboutUs: renderAboutUs,
  Menu: renderMenu,
  Gallery: renderGallery,
  Contact: renderContact,
};

function setImg(img) {
  if (!img) {
    if (image.parentNode) {
      image.remove();
    }
    return;
  }

  if (!image.parentNode) {
    imageContainer.appendChild(image);
  }
  image.src = img;
}

function renderPage(pageId) {
  const render = renderers[pageId];
  if (!render) return;

  mainText.replaceChildren(render());
  setImg(getImg(pageId));
}

Object.keys(renderers).forEach((pageId) => {
  const button = document.querySelector(`#${pageId}`);
  if (!button) return;

  button.addEventListener("click", () => renderPage(pageId));
});

renderPage("Home");
