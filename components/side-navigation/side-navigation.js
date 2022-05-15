// DOM Elements
const menuIcon = document.getElementById("menu-icon");
const sideDrawer = document.getElementById("side-drawer");
const drawerMenuIcon = document.getElementById("drawer-menu-icon");
const backdrop = document.getElementById("backdrop");
const navList = document.getElementById("nav-list");
const navListItems = document.querySelectorAll("#nav-list li");

// Local variables
const activePath = document.location.pathname.replaceAll("/", "");

// Functions
const getActiveNavItem = () => {
  for (const item of navListItems) {
    if (item.dataset.pathname === activePath) {
      return item;
    }
  }
};

const openSideDrawer = () => {
  sideDrawer.classList.add("open");
  backdrop.style.display = "block";
  getActiveNavItem().classList.add("active");
};

const closeSideDrawer = () => {
  sideDrawer.classList.remove("open");
  backdrop.style.display = "none";
  getActiveNavItem().classList.remove("active");
};

// Event Listeners
menuIcon.addEventListener("click", openSideDrawer);
backdrop.addEventListener("click", closeSideDrawer);
drawerMenuIcon.addEventListener("click", closeSideDrawer);
