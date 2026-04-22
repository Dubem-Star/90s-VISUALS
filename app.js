const body = document.body;
const colContainer = document.getElementById("colContainer");
const navHeader = document.getElementById("navHeader");
const heroTitle = document.getElementById("heroTitle");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const servicesContainer = document.getElementById("servicesContainer");
const contactForm = document.getElementById("contactForm");
const heroSection = document.getElementById("heroSection");
const toggleBtn = document.getElementById("toggleBtn");
const toggleBtnCont = document.getElementById("toggleBtnCont");
const navMenuToggler = document.getElementById("navMenuToggler");
const overlay = document.getElementById("overlay");
const galleryNav = document.getElementById("galleryNav");
const dropdownUl = document.getElementById("dropdownUl");

if (body.id === "homePage") {
  // *************************************************

  let dropdownTimer;

  const showDropdown = () => {
    clearTimeout(dropdownTimer);
    dropdownUl.classList.add("drop");
  };

  const hideDropdown = () => {
    // Give the user 100ms to "land" on the dropdown box
    dropdownTimer = setTimeout(() => {
      dropdownUl.classList.remove("drop");
    }, 100);
  };

  // 1. Listen to the Nav Link
  galleryNav.addEventListener("mouseenter", showDropdown);
  galleryNav.addEventListener("mouseleave", hideDropdown);

  // 2. Listen to the Dropdown Box itself (CRITICAL)
  // This keeps it open when the mouse is moving inside the menu
  dropdownUl.addEventListener("mouseenter", showDropdown);
  dropdownUl.addEventListener("mouseleave", hideDropdown);
  // ********************************************************

  // General Scroll function***************************
  // General Scroll function***************************
  let lastScrollY = scrollY;

  window.addEventListener("scroll", () => {
    // Navbar-Scroll-Hider**********

    let currentScrollY = window.scrollY;

    if (window.scrollY > heroSection.offsetHeight) {
      if (window.scrollY > lastScrollY) {
        navHeader.classList.add("hide-navbar");
        toggleBtnCont.classList.add("hide-navbar");
      } else {
        navHeader.classList.remove("hide-navbar"); //
        toggleBtnCont.classList.remove("hide-navbar");
      }
    } else {
      navHeader.classList.remove("hide-navbar"); //
    }

    lastScrollY = currentScrollY;

    // Navbar-Background-Transition**********
    const isScroll = window.scrollY > 0;

    if (navHeader.classList.contains("glass-background") !== isScroll) {
      navHeader.classList.toggle("glass-background");
    }

    // Navbar-Scroll-Listener**********
    const navBottomPoint = navHeader.offsetTop + navHeader.offsetHeight;
    const titleTop = heroTitle.offsetTop;

    if (navBottomPoint >= titleTop) {
      navHeader.style.borderBottomColor =
        "color-mix(in srgb, var(--default-color), transparent 90%)";
    } else {
      navHeader.style.borderBottomColor = "transparent";
    }

    // Sections-Scroll-Listener**********
    let currentId;
    const navHeight = 150;
    for (let section of sections) {
      const sectionTop = section.offsetTop - navHeight;

      if (scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    }

    for (let link of navLinks) {
      link.classList.remove("focus");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("focus");
      }
    }
  });

  // Hamburger Toggler**********************************
  // Hamburger Toggler**********************************

  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.src.includes("hamburger.png")) {
      toggleBtn.src = "./photos/icons/closethin.png";

      overlay.classList.add("activate");
      navMenuToggler.classList.toggle("active");
      body.classList.add("scroll-lock");
    } else {
      toggleBtn.src = "./photos/icons/hamburger.png";
      navMenuToggler.classList.toggle("active");
      overlay.classList.remove("activate");
      body.classList.remove("scroll-lock");
    }
  });

  const heroImgBg = document.getElementById("heroImgBg");
  setInterval(() => {
    heroImgBg.classList.toggle("active");
  }, 7000);

  // Gallery Section**********************************
  // Gallery Section**********************************

  const images = [
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008042/uk_babe.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008034/purple_couple.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008033/coperate_babe.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008042/uti_pic.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008042/uu.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008040/sworv_couple.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008031/dark_blue_groom.jpg",
    "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008036/rainbow_beenie.jpg",
  ];

  let num = 1;

  for (let img of images) {
    const col = document.createElement("div");
    col.classList.add("col-xl-3", "col-lg-4", "col-6", "custom-col");

    col.innerHTML = `

<div class= "gallery-item h-100">
<a href="${img}" class="glightbox" title="Gallery-${num}"  data-gallery="gallery">
<img
src="${img}"
class="img-fluid gallery-img"
alt="gallery-item-${num}"
/>
</a>
</div>

    `;
    ++num;
    colContainer.appendChild(col);
  }

  AOS.init();
  const lightbox = GLightbox();

  //Services Section**********************************
  //Services Section**********************************

  const services = [
    {
      name: "Weddings & Unions",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776458356/union.jpg",
      description:
        "Cinematic storytelling for your most intimate and grand celebrations.",
    },

    {
      name: "Private Portraits",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776458394/northen_babe.jpg",
      description:
        "Personalized sessions that capture your character with editorial polish.",
    },

    {
      name: "Commercial Branding",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776458365/branding.jpg",
      description:
        "High-end visual assets designed to elevate your personal or business brand.",
    },

    {
      name: "Social & Nightlife",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776429365/night_life.jpg",
      description:
        "Capturing the raw energy, mood, and authentic vibes of the city after dark.",
    },

    {
      name: "Editorial & Fashion",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776458382/outdoor.jpg",
      description:
        "High-concept imagery focused on style, movement, and dramatic lighting.",
    },

    {
      name: "Cinematography",
      icon: "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto,w_840,h_700,c_fill,g_auto/v1776414947/music_vid.png",
      description:
        "Bringing sound to life through motion and storytelling. From music videos to brand films.",
    },
  ];

  for (let service of services) {
    const col = document.createElement("div");
    col.classList.add(
      "col-lg-4",
      "col-12",
      "col-md-6",
      "h-sm-50",
      "service-wrapper",
    );
    // col.dataset.aos = "fade-up";
    // col.dataset.aosDelay = "20";

    col.innerHTML = `
    <a href="#contactSection" class="text-decoration-none text-reset">
 <div class = "service-container  overflow-hidden"> 
  
  
  <img src= "${service.icon}" class="icon-img"/>


  <h2 class = "service-title text-decoration-none">${service.name}</h2>

  <p class= "description text-center ">${service.description}</p>

    </div>
  </a>
  `;

    servicesContainer.appendChild(col);
  }

  //Contact Section**********************************
  //Contact Section**********************************

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);

    const contactInfo = {
      name: `${data.get("first-name")} ${data.get("last-name")}`,
      email: data.get("email"),
      number: data.get("phone-number"),
      message: data.get("message"),
    };

    contactForm.reset();
    // console.log(contactInfo);
  });
}
