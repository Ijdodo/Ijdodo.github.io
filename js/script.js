window.addEventListener("load", function (e) {
  const body = document.querySelector("body");
  const openBars = document.querySelector(".openBars");
  const closeBars = document.querySelector(".closeBars");
  const navbarSecond = document.querySelector(".navbarSecond");
  const menu = document.querySelector(".bars span");

  body.style.opacity = "1";

  gsap.from("h2", {
    opacity: 0,
    duration: 1.5,
    delay: 0.7,
    y: 30,
  });

  openBars.addEventListener("click", () => {
    navbarSecond.style.display = "block";
    closeBars.style.transform = "rotate(0deg)";
    openBars.style.transform = "rotate(200deg)";
    setTimeout(() => {
      navbarSecond.style.opacity = "1";
      openBars.style.display = "none";
      closeBars.style.display = "block";
    }, 200);
  });
  closeBars.addEventListener("click", () => {
    closeBars.style.transform = "rotate(200deg)";
    openBars.style.transform = "rotate(0deg)";
    navbarSecond.style.opacity = "0";
    setTimeout(() => {
      navbarSecond.style.display = "none";
      openBars.style.display = "block";
      closeBars.style.display = "none";
    }, 200);
  });
  menu.addEventListener("click", function (e) {
    let active = menu.classList.contains("active")
    if (active) {
      closeBars.style.transform = "rotate(200deg)";
      openBars.style.transform = "rotate(0deg)";
      navbarSecond.style.opacity = "0";
      menu.classList.remove("active")
      setTimeout(() => {
        navbarSecond.style.display = "none";
        openBars.style.display = "block";
        closeBars.style.display = "none";
      }, 200);
    } else {
      navbarSecond.style.display = "block";
      closeBars.style.transform = "rotate(0deg)";
      openBars.style.transform = "rotate(200deg)";
      menu.classList.add("active")
      setTimeout(() => {
        navbarSecond.style.opacity = "1";
        openBars.style.display = "none";
        closeBars.style.display = "block";
      }, 200);
    }
  })
});
