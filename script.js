function login() {
  const username = document.getElementById("username").value;
  if (username === "") {
    alert("Enter username");
    return;
  }
  localStorage.setItem("user", username);
  window.location = "dashboard.html";
}

function logout() {
  localStorage.clear();
  window.location = "index.html";
}

function loadData() {
  const user = localStorage.getItem("user");
  if (!user) return;

  document.getElementById("welcomeText").innerText =
    "Welcome, " + user;

  document.getElementById("htmlProgress").innerText =
    localStorage.getItem("html") || 0;
  document.getElementById("cssProgress").innerText =
    localStorage.getItem("css") || 0;
  document.getElementById("jsProgress").innerText =
    localStorage.getItem("js") || 0;
}

function addProgress(course) {
  let value = localStorage.getItem(course) || 0;
  value = Math.min(parseInt(value) + 10, 100);
  localStorage.setItem(course, value);
  loadData();
}

loadData();