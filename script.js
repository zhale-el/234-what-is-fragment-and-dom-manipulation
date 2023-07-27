const userList = document.querySelector("#users");

let usersArray = ["zhale", "Elnaz", "Elena"];

let newUserLi = null;
let userFragment = document.createDocumentFragment();

usersArray.forEach(function (user) {
  newUserLi = document.createElement("li");
  newUserLi.innerHTML = user;
  userFragment.append(newUserLi);
});
userList.append(userFragment);
