// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// benefit 
const benefitItems = document.querySelectorAll(".benefits-list li");

function showOnScroll() {
  benefitItems.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      setTimeout(() => {
        item.classList.add("visible");
      }, i * 100);
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll(); // run on load

