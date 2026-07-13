/* Drawing-set interactions: category filter + click-to-load YouTube. */

// Category filter on the views grid (index page)
document.querySelectorAll(".filters").forEach((bar) => {
  const pills = bar.querySelectorAll(".pill");
  const cards = document.querySelectorAll("[data-category]");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.setAttribute("aria-pressed", p === pill ? "true" : "false"));
      const want = pill.dataset.filter;
      cards.forEach((c) => {
        c.classList.toggle("hidden", want !== "all" && c.dataset.category !== want);
      });
    });
  });
});

// Lite YouTube embed: thumbnail button swaps to the real iframe on click
document.querySelectorAll(".yt[data-video]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.video;
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    iframe.title = el.dataset.title || "Project video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    el.innerHTML = "";
    el.appendChild(iframe);
    el.classList.add("loaded");
  }, { once: true });
});
