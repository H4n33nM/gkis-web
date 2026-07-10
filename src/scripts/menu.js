document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".hamburger-menu");
  if (!menu) return;

  const setMenuState = (expanded) => {
    menu.setAttribute("aria-expanded", expanded ? "true" : "false");
    document.body.classList.toggle("menu-open", expanded);
  };

  menu.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
  });

  // Ensure menu state resets when resizing to larger screens
  const BREAKPOINT_PX = 768;
  const onResize = () => {
    if (window.innerWidth >= BREAKPOINT_PX) {
      setMenuState(false);
    }
  };

  window.addEventListener("resize", onResize);
  onResize();
});
