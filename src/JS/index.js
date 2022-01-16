import Header from "./pages/header.js";
import Home from "./pages/home.js";

const $ = document;

const state = {
  state: "main",
};

function init() {
  const root = $.querySelector("#root");
  Header(root);
  Home(root);
}
init();

const currentPages = location.pathname;

if (currentPages !== "/") {
  init();

  switch (currentPages) {
    case "/home":
      Home(root);
      break;
    case "/":
      Home(root);
      break;
    default:
      break;
  }
} else {
  init();
}

window.addEventListener("popstate", () => {
  const currentPage = location.pathname;
  switch (currentPage) {
    // case "/menu":
    //   ButtonReaction();
    //   break;
    case "/home":
      Home(root);
      break;
    case "/":
      Home(root);
      break;
  }
});
