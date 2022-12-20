//days until Christmas counter
let count = fetchDayCount();
document.getElementById("count").innerText = count;

function fetchDayCount() {
  let dayDiff =
    new Date("Jan 1, 2023 00:00:00").getTime() - new Date().getTime();
  console.log(Math.floor(dayDiff / (1000 * 60 * 60 * 24)));
  return Math.floor(dayDiff / (1000 * 60 * 60 * 24));
}