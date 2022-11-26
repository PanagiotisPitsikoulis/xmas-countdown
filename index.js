//days until Christmas counter
let count = fetchDayCount();
document.getElementById("count").innerText = count;

function fetchDayCount() {
  var dayDiff =
    new Date("Jan 1, 2023 00:00:00").getTime() - new Date().getTime();
  console.log(Math.floor(dayDiff / (1000 * 60 * 60 * 24)));
  return Math.floor(dayDiff / (1000 * 60 * 60 * 24));
}
//like counter
let likes = 0;
async function likeAction() {
  console.log(likes);
  likes++;
  document.getElementById("like-counter").innerText = likes;
  //disable like button
  document.getElementById("like-button").disabled = true;
  await new Promise((r) => setTimeout(r, 1000));
  document.getElementById("like-button").style.display = "none";
}
