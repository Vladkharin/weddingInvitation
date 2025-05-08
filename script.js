document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams);
  const names = document.querySelector("#names");

  function formatNames(arr) {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];

    const last = arr.pop();
    return arr.join(", ") + " и " + last;
  }

  names.textContent = formatNames(params.names.split(","));
});
