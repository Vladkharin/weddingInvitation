document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams);
  const names = document.querySelector("#names");

  const arr = ["Светлана и Владислав"];

  names.textContent = arr[params.family];
});
