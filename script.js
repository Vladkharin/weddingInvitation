document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams);
  const names = document.querySelector("#names");

  const arr = [
    { id: 0, names: "Лидия и Владимир" },
    {
      id: 1,
      names: "Елизавета",
    },
  ];

  names.textContent = arr[params.family];
});
