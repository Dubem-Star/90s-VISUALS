const body = document.body;
const colContainer = document.getElementById("colContainer");
const navHeader = document.getElementById("navHeader");
const heroTitle = document.getElementById("heroTitle");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const servicesContainer = document.getElementById("servicesContainer");
const contactForm = document.getElementById("contactForm");

if (body.id === "homePage") {
  // General Scroll function***************************
  // General Scroll function***************************

  window.addEventListener("scroll", () => {
    const isScroll = window.scrollY > 0;

    if (navHeader.classList.contains("bg") !== isScroll) {
      navHeader.classList.toggle("bg");
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

  const toggleBtn = document.getElementById("toggleBtn");
  const navMenuToggler = document.getElementById("navMenuToggler");
  const overlay = document.getElementById("overlay");
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
    heroImgBg.classList.toggle("first-img");
    heroImgBg.classList.toggle("second-img");
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
      name: "Fashion Photography",
      icon: "photos/icons/fashion-icon.png",
      description:
        "Capture style and elegance through stunning visuals. Our fashion photography highlights clothing, accessories, and individuality.",
    },

    {
      name: "Wedding Photography",
      icon: "photos/icons/marriage-icon.png",
      description:
        "We preserve your special day in timeless images filled with emotion, laughter, and love.",
    },

    {
      name: "Product Photography",
      icon: "photos/icons/product-icon.png",
      description:
        "Highlight your brand with crisp, detailed, and visually appealing product images that capture quality and drive customer attention.",
    },

    {
      name: "Portrait Photography",
      icon: "photos/icons/portrait-icon.png",
      description:
        "Classic, clean, and full of character — our portraits capture your essence in its most natural and expressive form.",
    },

    {
      name: "Sport Photography",
      icon: "photos/icons/sport-icon.png",
      description:
        "Freeze the action and intensity of the game with sharp, dynamic sports imagery. We capture the energy, motion, and victory in every frame.",
    },

    {
      name: "Birthday Photography",
      icon: "photos/icons/birthday-icon.png",
      description:
        "Make your celebrations unforgettable with vibrant, joyful birthday photos.",
    },
  ];

  for (let service of services) {
    const col = document.createElement("div");
    col.classList.add(
      "col",

      "col-4",
      "service-wrapper",
    );

    col.innerHTML = `
    <a href="#contactSection" class="text-decoration-none text-reset">
 <div class = "service-container"> 
  <div class = "icon-container "> 
  
  <img src= "${service.icon}" class="icon-img"/>
  </div>

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
