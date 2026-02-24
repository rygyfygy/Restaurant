import plateImg from "./food_meal_dish_meat_culinary.jpg";
import porkImg from "./pork_yummy_delicious_dinner_tasty_cuisine_grilled_meat.jpg";
import riceImg from "./food_rice_meat_meal_plate_shrimps.jpg";
import platesImg from "./home-plates.jpeg";

const imageByPage = {
  Home: plateImg,
  AboutUs: porkImg,
  Menu: riceImg,
  Gallery: platesImg,
};

export function getImg(pageId) {
  return imageByPage[pageId];
}
