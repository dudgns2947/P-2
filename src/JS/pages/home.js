const $ = document;

export default function Home(root) {
  const home = $.createElement("div");
  home.innerHTML = `
    <h1>Welcome!!</h1>`;
  home.classList.add("home", "replace");

  root.appendChild(home);
}
