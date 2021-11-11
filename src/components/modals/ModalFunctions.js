export const closeCookiesModal = () => {
  let x = document.getElementById("cookies-modal");
  x.style.display = "none";
};
export const refreshPage = () => {
  let x = document.getElementById("cookies-modal");
  if (x.style.display === "block") {
    window.location.reload(true);
  }
};

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "Escape") {
    document.getElementById("cookies-modal").style.display = "none";
  }
});
