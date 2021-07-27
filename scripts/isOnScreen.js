function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElementBetweenBottomAndTop(element) {
  const rect = element.getBoundingClientRect();

  return rect.top <= 200 && rect.bottom >= 200;
}

export { isInViewport, isElementBetweenBottomAndTop };
