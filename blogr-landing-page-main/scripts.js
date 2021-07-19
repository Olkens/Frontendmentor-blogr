const hamburger = document.getElementById("mobile-hamburger");
const arrow = document.getElementById("arrow");
const navMenu = document.getElementById("nav_menu");
const navMenuItems = document.getElementById("navMenuItems");
const mobileAccordions = document.querySelectorAll(".nav-dropdown");

hamburger.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navMenu.classList.add("hidden");
    hamburger.src = "../images/icon-hamburger.svg";
  } else {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("active");
    hamburger.src = "../images/icon-close.svg";
  }
});

for (let i = 0; i < mobileAccordions.length; i++) {
  const mobileNavBtn = mobileAccordions[i].querySelector(".nav-dropdown__btn");
  const mobileNavDropdown = mobileAccordions[i].querySelector(
    ".nav-dropdown__items"
  );

  mobileNavBtn.addEventListener("click", function () {
    console.log(mobileNavDropdown);
    if (!mobileNavBtn.classList.contains("rotated")) {
        mobileNavBtn.classList.add("rotated");
      mobileNavDropdown.classList.remove("hidden");
      mobileNavDropdown.classList.add("flex");
    } else {
      mobileNavDropdown.classList.add("hidden");
      mobileNavDropdown.classList.remove("flex");
      mobileNavBtn.classList.remove("rotated");
    }
  });
}
