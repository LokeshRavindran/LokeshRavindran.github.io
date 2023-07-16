export const scrollIntoView = (elementId) => {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
