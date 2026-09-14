document.getElementById("year").textContent = String(new Date().getFullYear());

const nav = document.getElementById("nav");
const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const THEME_KEY = "bharghava-theme";
const THEME_ORDER = ["system", "light", "dark"];
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-toggle-label");

function currentTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return "system";
}

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(THEME_KEY);
    theme = "system";
  }
  const label = theme.charAt(0).toUpperCase() + theme.slice(1);
  themeLabel.textContent = label;
  themeToggle.setAttribute("aria-label", `Theme: ${label}. Click to change.`);
}

applyTheme(currentTheme());

themeToggle.addEventListener("click", () => {
  const index = THEME_ORDER.indexOf(currentTheme());
  const next = THEME_ORDER[(index + 1) % THEME_ORDER.length];
  applyTheme(next);
});
