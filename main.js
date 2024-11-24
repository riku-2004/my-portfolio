const myName = document.getElementById("name");
const myBirthday = document.getElementById("birthday");
const myHometown = document.getElementById("hometown");
const aboutButton = document.getElementById("aboutButton");
const hobby = document.getElementById("hobby");
const picture1 = document.getElementById("pic1");
const picture2 = document.getElementById("pic2");
const myselfButton = document.getElementById("myselfButton");

const snsButton = document.getElementById("snsButton");
const instagram = document.getElementById("instagram");

const quizButton1 = document.getElementById("choice-1");
const quizButton2 = document.getElementById("choice-2");
const quizButton3 = document.getElementById("choice-3");
const quizKaisetu = document.getElementById("kaisetu");
const kaisetuText = document.getElementById("kaisetuText");
//自己紹介のページ
myselfButton.onclick = function () {
  myName.textContent = "名前：並木陸";
  myBirthday.textContent = "生年月日:2004年1月15日";
  myHometown.textContent = "出身地:長野県軽井沢町";
  hobby.textContent = "趣味：ゲーム、音楽";
  picture1.src = "Yagai_shiratama.jpg";
  picture2.src = "tech_ofukai.jpg";
};
//CONTACTのページ
snsButton.onclick = function () {
  instagram.textContent = "Instagram: @riku_marron";
};
//クイズのページ
quizButton1.onclick = function () {
  alert("残念、不正解！");
};
quizButton2.onclick = function () {
  alert("正解！");
};
quizButton3.onclick = function () {
  alert("残念、不正解！");
};
quizKaisetu.onclick = function () {
  kaisetuText.textContent =
    "正解は2番です。この問題は、それぞれのアルファベットの何文字目を読むかが式で与えられていました。例えば、2y は、'わい'の二文字目である'い'を読むことになります。このようにして解いていくと、3w+4xは 'だぶりゅー'の三文字目である'り' + 'えっくす'の四文字目である'す'で、'りす'となります。";
};

//そのほか
const tabs = document.querySelectorAll("tabControl");
const pages = document.querySelectorAll("tabBody");

document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll("#tabControl a");
  const tabContents = document.querySelectorAll(".tabContent");

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      tabContents.forEach((content) => {
        content.classList.remove("active"); // すべてのタブコンテンツを非表示に
      });
      tabLinks.forEach((link) => {
        link.classList.remove("active"); // すべてのタブリンクからactiveクラスを削除
      });

      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
      link.classList.add("active");
    });
  });
});
