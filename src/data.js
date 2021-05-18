import cConverterImg from "./images/cConverter.png";
import starWarsImg from "./images/starWarsApi.png";
import tarkovImg from "./images/tarkovBallistics.png";
import simInt from "./images/simInt.png";

const data = [
  {
    img: cConverterImg,
    title: "Currency Converter",
    text: "Currency Converter was a project that initially started with vanilla JS and CSS using Bootstrap. Only later it was remade in React. The calculation when it was first deployed used to be based on an API that later changed to a model that required the user to pay for a key to exchange the currency. So I made the change to what is now the current working API.The current API happens to sometimes go down but hey, at least it's free.It was a very fun project to make, and it was my first deployed project. Currently it converts between the following currencies: BRL, USD and EUR.",
    website: "https://fmagesty.github.io/currency-converter/",
  },
  {
    img: starWarsImg,
    title: "Search Ships using the Star Wars API",
    text: "This project is all about working with an API and Json data. It was a project developed by the PodCodar community and asked the developer to search the starwar ships on the API and show it's information without using any library that worked with it. This was a good challenge and interesting project. It was made in React.",
    website: "https://fmagesty.github.io/react-sw-api/",
  },
  {
    img: tarkovImg,
    title: "Escape From Tarkov: Ballistics Simulator",
    text: " EFT: Ballistics Simulator was made for players to solve the problem of not knowing about which of the ingame ammo to use. Until the developers of EFT release a public API this one will be my only EFT project for the moment.",
    website: "https://fmagesty.github.io/react-tarkov-ballistics/",
  },
  {
    img: simInt,
    title: "React Forms",
    text: "React Forms was made to use forms and deal with erros that might appear. It deals with: user sign in, user login and profile update",
    website: "https://fmagesty.github.io/react-forms/",
  },
];

export default data;
