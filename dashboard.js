const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const sidebarItems = document.querySelectorAll(".sidebar p");
const topicCards = document.querySelectorAll(".topic-card");
const continueBtn = document.querySelector(".story-info button");
const navItems = document.querySelectorAll(".nav-links li");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

topicCards.forEach(card => {
  card.addEventListener("click", () => {
    const topicName = card.innerText;
    alert(`Opening topic: ${topicName}`);
  });
});

continueBtn.addEventListener("click", () => {
  alert("Resuming your last lesson...");
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    alert(`${item.innerText} clicked`);
  });
});

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinks.classList.remove("show");
    }
  });
});
