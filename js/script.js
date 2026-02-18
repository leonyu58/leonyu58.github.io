// Apply saved preference after the DOM is ready so the button exists
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const setLabel = (isDark) => {
    toggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("aria-pressed", isDark.toString());
  };

  // Restore previously chosen theme
  const prefersDark = localStorage.getItem("darkMode") === "true";
  if (prefersDark) {
    document.body.classList.add("dark");
  }
  setLabel(prefersDark);

  // Toggle theme and persist choice
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
    setLabel(isDark);
  });
});
