const btns=document.querySelectorAll(".button")
const tabs=document.querySelector(".Tabs")
const contentEl=document.querySelectorAll(".content")

tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("live");
      });
      e.target.classList.add("live");
      // hide other articles
      contentEl.forEach(function (contentEl) {
        contentEl.classList.remove("live");
      });
      const element = document.getElementById(id);
      element.classList.add("live");
    }
  });

 