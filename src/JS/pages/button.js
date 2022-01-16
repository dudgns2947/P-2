import Home from "./home.js";
const $ = document;

// 버튼을 생성하고 해당 taget으로 url 변경하기
export default function makeButton(target) {
  const button = $.querySelector(`.${target}`);
  button.addEventListener("click", () => ChangePages(root, target));
}

function ChangePages(root, target) {
  if (target !== "login-btn") {
    history.pushState({ data: `${target}` }, null, `${target}`);
  }
  switch (target) {
    case "home":
      Home(root);
      break;
  }
}
