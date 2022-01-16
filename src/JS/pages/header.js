import makeButton from "./button.js";

const $ = document;

export default function Header(root) {
  const header = $.createElement("header");
  header.innerHTML = `<i class="fas fa-bars menu click" ></i>
    <span class="home click" >아주대 직방</span>
    <span class="login click" >Log in</span>`;
  root.appendChild(header);

  const headerButtons = ["menu", "home", "login"];

  makeButton(headerButtons);
}

function makeButton(buttonNames) {
  buttonNames.forEach((buttonName) => {
    makeButton(buttonName);
  });
}
