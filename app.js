function page1animation() {
  const nav = document.querySelector("nav");
  const navBottom = document.getElementById("nav-bottom");
  const h5Elements = document.querySelectorAll(".nav-part2 h5");
  const spanElements = document.querySelectorAll(".nav-part2 h5 span");

  nav.addEventListener("mouseenter", function () {
    navBottom.style.height = "21vh";
    setTimeout(() => {
      h5Elements.forEach((h5) => {
        h5.style.display = "block";
      });
      spanElements.forEach((span, index) => {
        setTimeout(() => {
          span.style.transform = "translateY(0)";
        }, index * 60);
      });
    }, 30);
  });

  nav.addEventListener("mouseleave", function () {
    spanElements.forEach((span, index) => {
      setTimeout(() => {
        span.style.transform = "translateY(25px)";
      }, index * 100);
    });

    setTimeout(() => {
      h5Elements.forEach((h5) => {
        h5.style.display = "none";
      });
      navBottom.style.height = "0";
    }, 300 + 100 * spanElements.length);
  });
}

function page2Animation() {
  const rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach((elem) => {
    const target = elem.childNodes[3];

    elem.addEventListener("mouseenter", handleMouseEnter);
    elem.addEventListener("mouseleave", handleMouseLeave);
    elem.addEventListener("mousemove", handleMouseMove);

    function handleMouseEnter() {
      target.style.opacity = "1";
      target.style.transform = "scale(1)";
    }

    function handleMouseLeave() {
      target.style.opacity = "0";
      target.style.transform = "scale(0)";
    }

    function handleMouseMove(event) {
      const rect = elem.getBoundingClientRect();
      const x = event.clientX - rect.left - 60;
      const y = event.clientY - rect.top - 80;
      target.style.transform = `translate(${x}px, ${y}px)`;
    }
  });
}

function page3VideoAnimation() {
  const page3Center = document.querySelector(".page3-center");
  const video = document.querySelector(".page3 video");
  // const sections = document.querySelectorAll(".sec-right video");

  page3Center.addEventListener("click", function () {
    toggleVideo(video);
  });

  video.addEventListener("click", function () {
    toggleVideo(video);
  });

  video.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      toggleVideo(elem);
    });
    elem.addEventListener("mouseleave", function () {
      toggleVideo(elem);
    });
  });

  function toggleVideo(elem) {
    if (elem.paused) {
      elem.play();
      elem.style.transform = "scale(1)";
      elem.style.opacity = 1;
      elem.style.borderRadius = "1";
    } else {
      elem.pause();
      elem.style.transform = "scale(0.7)";
      elem.style.opacity = 0;
      elem.style.borderRadius = "30px";
    }
  }
}

function page7animation() {
  let sectionright = document.querySelectorAll(".sec-right");
  sectionright.forEach(function (elem) {
    // console.log(elem);
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
      // console.log(childNodes[3])
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page8animation() {
  let leftvideo = document.querySelectorAll(".video-left");
  let rightvideo = document.querySelectorAll(".video-right");

  leftvideo.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      const video = elem.querySelector(".left-img video");
      video.style.opacity = 1;
      video.play();
    });

    elem.addEventListener("mouseleave", function () {
      const video = elem.querySelector("video");
      video.style.opacity = 0;
      video.load();
    });
  });
  rightvideo.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      const video = elem.querySelector(".right-img video");
      video.style.opacity = 1;
      video.play();
    });

    elem.addEventListener("mouseleave", function () {
      const video = elem.querySelector("video");
      video.style.opacity = 0;
      video.load();
    });
  });
}
page1animation();
page2Animation();
page3VideoAnimation();
page7animation();
page8animataion();
