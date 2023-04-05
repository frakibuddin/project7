window.addEventListener("load", function () {
  const h1 = document.querySelectorAll("h1");
  const h2 = document.querySelectorAll("h2");
  const h6 = document.querySelectorAll("h6");
  const p = document.querySelectorAll("p");
  const span = document.querySelectorAll("span");
  const img = document.querySelectorAll("img");
  const button = document.querySelectorAll("button");
  const div = document.querySelectorAll("div");

  setTimeout(() => {
    function names(element) {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "1";
      }
    }
    names(h1);
    names(h2);
    names(h6);
    names(p);
    names(span);
    names(img);
    names(button);
    names(div);
  }, 0);
});

// mood-btn
const mood_btn = document.querySelector(".mood-btn");
const body = document.querySelector("body");

mood_btn.onclick = function () {
  if (body.getAttribute("class") == "dark") {
    mood_btn.innerText = "Dark";
  } else {
    mood_btn.innerText = "Light";
  }
  body.classList.toggle("dark");
};

//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");
const header = document.querySelector("header");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > window.innerHeight - 5000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }

  // if (pos > 700) {
  //   header.classList.add("active");
  // } else {
  //   header.classList.remove("active");
  // }
};

// tap_top_btn.onclick = function () {
//   document.documentElement.scrollTop = 0;
// };

//testimonial slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    mouseDrag: false,
    loop: true,
    margin: 2,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-prev").click(function () {
    $active = $(".owl-item .item.show");
    $(".owl-item .item.show").removeClass("show");
    $(".owl-item .item").removeClass("next");
    $(".owl-item .item").removeClass("prev");
    $active.addClass("next");
    if ($active.is(".first")) {
      $(".owl-item .last").addClass("show");
      $(".first").addClass("next");
      $(".owl-item .last").parent().prev().children(".item").addClass("prev");
    } else {
      $active.parent().prev().children(".item").addClass("show");
      if ($active.parent().prev().children(".item").is(".first")) {
        $(".owl-item .last").addClass("prev");
      } else {
        $(".owl-item .show").parent().prev().children(".item").addClass("prev");
      }
    }
  });

  $(".owl-next").click(function () {
    $active = $(".owl-item .item.show");
    $(".owl-item .item.show").removeClass("show");
    $(".owl-item .item").removeClass("next");
    $(".owl-item .item").removeClass("prev");
    $active.addClass("prev");
    if ($active.is(".last")) {
      $(".owl-item .first").addClass("show");
      $(".owl-item .first").parent().next().children(".item").addClass("prev");
    } else {
      $active.parent().next().children(".item").addClass("show");
      if ($active.parent().next().children(".item").is(".last")) {
        $(".owl-item .first").addClass("next");
      } else {
        $(".owl-item .show").parent().next().children(".item").addClass("next");
      }
    }
  });
});
