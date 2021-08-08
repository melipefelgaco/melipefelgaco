import cConverterImg from "./Assets/cConverter.png";
import starWarsImg from "./Assets/starWarsApi.png";
import tarkovImg from "./Assets/tarkovBallistics.png";
import simInt from "./Assets/simInt.png";
import buttonAesthetics from "./Assets/buttonAesthetics.png";
import bookFinder from "./Assets/bookFinder.png";
import quizShow from "./Assets/quizShow.png";
import musicFinder from "./Assets/musicFinder.png";

const data = [
  {
    img: cConverterImg,
    title: "Currency Converter",
    text: "Currency Converter was a project that initially started with vanilla JS and CSS using Bootstrap. Only later it was remade in React. The calculation when it was first deployed used to be based on an API that later changed to a model that required the user to pay for a key to exchange the currency. So I made the change to what is now the current working API.The current API happens to sometimes go down but hey, at least it's free.It was a very fun project to make, and it was my first deployed project. Currently it converts between the following currencies: BRL, USD and EUR.",
    website: "https://fmagesty.github.io/currency-converter/",
    code: "https://github.com/fmagesty/currency-converter",
  },
  {
    img: simInt,
    title: "React Forms",
    text: "React Forms was made to use forms and deal with errors that might appear. It consumes the API via Postman and deals with: user sign in, user login and profile update. This project depends on a 3rd party backend server to run properly, beyond my reach. It will run smoothly as long as the backend holds, but the code is still replicable on other projects, if needed.",
    website: "https://fmagesty.github.io/react-forms/",
    code: "https://github.com/fmagesty/react-forms",
  },
  {
    img: bookFinder,
    title: "Find Your Book",
    text: "Find Your Book uses the Google Books API to return these books after a quick search. It shows details about each book. The project was made to enter a front-end challenge.",
    website: "https://fmagesty.github.io/book-finder/",
    code: "https://github.com/fmagesty/book-finder",
  },
  {
    img: quizShow,
    title: "Quiz Show",
    text: "Quiz Show generates 50 questions based on the Open Trivia Database API (https://opentdb.com/) and keeps track of the user score from those 50 questions. The user can also choose which difficulty to play. There is a modal for each incorrect/correct answer clicked as feedback. The score is displayed at the end.",
    website: "https://fmagesty.github.io/quiz-show/",
    code: "https://github.com/fmagesty/quiz-show",
  },
  {
    img: musicFinder,
    title: "Music Finder",
    text: "Music finder interacts with 2 APIs: the Youtube API and Ticketmaster API. It lets you search for the band/artist of your choosing and return all the related youtube videos from it. For each video there is a button to show the events of the band/artist as well.",
    website: "https://fmagesty.github.io/music-finder/",
    code: "https://github.com/fmagesty/music-finder",
  },
];

export default data;
