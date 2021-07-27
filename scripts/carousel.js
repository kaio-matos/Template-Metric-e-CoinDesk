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

function changeQuote(sumSub) {
  const quotesContainer = document.querySelector(
    ".customers__quotes_container"
  );
  const scrollX = quotesContainer.scrollLeft;
  const scrollWidth = quotesContainer.scrollWidth;
  const quotesLength = quotesContainer.children.length;

  const lastQuote = quotesContainer.children[quotesLength - 1];
  const firstQuote = quotesContainer.children[0];

  const pixelsToAdvance = firstQuote.clientWidth;

  let newScrollX = 0;

  switch (sumSub) {
    case "sum":
      newScrollX = scrollX + pixelsToAdvance;

      const isLastOnScreen = isInViewport(lastQuote);
      if (isLastOnScreen) newScrollX = 0;
      break;
    case "sub":
      newScrollX = scrollX - pixelsToAdvance;

      const isFirstOnScreen = isInViewport(firstQuote);
      if (isFirstOnScreen) newScrollX = scrollWidth;
      break;
    default:
      newScrollX = 0;
      break;
  }

  quotesContainer.scrollLeft = newScrollX;
}

const previousQuote = () => {
  changeQuote("sub");
};

const nextQuote = () => {
  changeQuote("sum");
};
