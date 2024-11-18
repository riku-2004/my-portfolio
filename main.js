const myName = document.getElementById("name");
const myBirthday = document.getElementById("birthday");
const myHometown = document.getElementById("hometown");
const about = document.getElementById("about");

about.onclick = function () {
  myName.textContent = "名前：並木陸";
  myBirthday.textContent = "生年月日:2004年1月15日";
  myHometown.textContent = "出身地:長野県軽井沢町";
};

const tabs = document.querySelectorAll("tabControl");
const pages = document.querySelectorAll("tabBody");

function changePage(index) {
  