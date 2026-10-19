(function () {
  // Format internasional tanpa "+". Kosongkan untuk mengarahkan tombol ke bagian Kontak.
  var WA_NUMBER = "6289694412717";

  if (WA_NUMBER) {
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(a.dataset.wa);
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");

  function syncBtn() {
    var dark = root.dataset.theme === "dark";
    btn.textContent = dark ? "Terang" : "Gelap";
    btn.setAttribute("aria-label", dark ? "Ganti ke tema terang" : "Ganti ke tema gelap");
  }

  btn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncBtn();
  });
  syncBtn();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
