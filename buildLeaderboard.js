const names = ["Grace", "Arpit", "Lokendra", "Satyam"];
const ol = document.getElementById("leaderboard");

names.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
});
