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
const closeBtn = document.getElementById("closeBtn");
const toggleBtnCont = document.getElementById("toggleBtnCont");
const navMenuToggler = document.getElementById("navMenuToggler");
const overlay = document.getElementById("overlay");
const galleryNav = document.getElementById("galleryNav");
const mobileGalleryNav = document.getElementById("mobileGalleryNav");
const dropdownUl = document.getElementById("dropdownUl");
const dropdownMobile = document.getElementById("dropdownMobile");
const catTitle = document.getElementById("catTitle");
const galleryPageCont = document.getElementById("galleryPageCont");

// if (body.id === "homePage") {
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

dropdownUl.addEventListener("mouseenter", showDropdown);
dropdownUl.addEventListener("mouseleave", hideDropdown);

// ********************************************************

mobileGalleryNav.addEventListener("click", () => {
  mobileGalleryNav.classList.toggle("bi-chevron-up");
  mobileGalleryNav.classList.toggle("bi-chevron-down");
  dropdownMobile.classList.toggle("show");
});

// ********************************************************

// General Scroll function***************************
// General Scroll function***************************
let lastScrollY = scrollY;

window.addEventListener("scroll", () => {
  // Navbar-Scroll-Hider**********
  let currentScrollY = window.scrollY;
  if (heroSection) {
    if (window.scrollY > heroSection.offsetHeight) {
      if (window.scrollY > lastScrollY) {
        navHeader.classList.add("hide-navbar");
        toggleBtnCont.classList.add("hide-navbar");
      } else {
        navHeader.classList.remove("hide-navbar"); // show navbar
        toggleBtnCont.classList.remove("hide-navbar"); // show hamburger
      }
    } else {
      navHeader.classList.remove("hide-navbar"); // show navbar
    }

    lastScrollY = currentScrollY;
  }

  if (catTitle) {
    let currentScrollY = window.scrollY;
    const isScrolledUp = window.scrollY > lastScrollY;
    navHeader.classList.toggle("hide-navbar", isScrolledUp);
    toggleBtnCont.classList.toggle("hide-navbar", isScrolledUp);
    lastScrollY = currentScrollY;
  }

  // Navbar-Background-Transition**********
  const isScroll = window.scrollY > 0;

  if (navHeader.classList.contains("glass-background") !== isScroll) {
    navHeader.classList.toggle("glass-background");
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
  overlay.classList.add("activate");
  navMenuToggler.classList.add("active");
  body.classList.add("scroll-lock");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("activate");
  navMenuToggler.classList.remove("active");
  body.classList.remove("scroll-lock");
});

const heroImgBg = document.getElementById("heroImgBg");
if (heroImgBg) {
  setInterval(() => {
    heroImgBg.classList.toggle("active");
  }, 7000);
}

// Gallery Section**********************************
// Gallery Section**********************************

if (colContainer) {
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
class="img-fluid gallery-img "
alt="gallery-item-${num}"
/>
</a>
</div>

    `;
    ++num;
    colContainer.appendChild(col);
  }
}

//Services Section**********************************
//Services Section**********************************
if (servicesContainer) {
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
}

//Contact Section**********************************
//Contact Section**********************************

if (contactForm) {
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
// }

if (body.id === "galleryPage") {
  const photos = {
    unionPhotos: [
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_01.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_02.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_03.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_04.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_05.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_06.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_07.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_08.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_09.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_10.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_11.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_12.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_13.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/union_14.jpg",
    ],
    portraitPhotos: [
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_01.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_02.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_03.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_04.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_05.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_06.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_07.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_09.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_10.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_11.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_12.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_13.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_14.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_15.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_16.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_17.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_18.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_19.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_20.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_21.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/portrait_22.jpg",
    ],
    familyPhotos: [
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_01.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_02.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_03.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_04.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_05.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_06.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/family_07.jpg",
    ],
    fashionPhotos: [
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_01.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_02.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_03.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_04.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_05.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_06.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_07.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_08.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_09.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_10.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_11.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_12.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_13.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_14.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_15.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_16.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_17.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_18.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_19.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_20.jpg",
      "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_21.jpg",
    ],
    // videos: ["bum"],
  };

  const categories = [
    { id: 0, cat: "all", images: Object.values(photos).flat() },
    { id: 1, cat: "unions", images: photos.unionPhotos },
    { id: 2, cat: "portraits", images: photos.portraitPhotos },
    { id: 3, cat: "family", images: photos.familyPhotos },
    { id: 4, cat: "fashion", images: photos.fashionPhotos },
    {
      id: 5,
      cat: "videos",
      images: [
        "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto,f_auto/fashion_21.jpg",
        "https://res.cloudinary.com/dirijnb2k/image/upload/q_auto/f_auto/v1776008031/dark_blue_groom.jpg",
      ],
    },
  ];

  const params = new URLSearchParams(window.location.search);
  const catId = params.get("id");
  const cat = categories.find((cat) => cat.id == catId);

  catTitle.innerHTML = cat.cat;
  let num = 1;
  for (let img of cat.images) {
    const galleryContent = document.createElement("div");
    galleryContent.classList.add("col-12", "col-xl-3", "col-lg-4", "col-sm-6");

    galleryContent.innerHTML = `
    <div class="  gallery-item w-100 h-100">
    <a href="${img}" class="glightbox" title="Gallery-${cat.cat}-${num}"  data-gallery="gallery">
<img src="${img}" class="w-100 h-100 rounded-3 gallery-img" alt="gallery-item-${num}"/>
    <div>
    
`;

    galleryPageCont.appendChild(galleryContent);
    ++num;
  }
}
AOS.init();
const lightbox = GLightbox();
