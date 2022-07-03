const domElements = (() => {
  const ratingDivs = document.querySelectorAll("input");

  return { ratingDivs };
})();


const getValue = function(e) {

  const value = e.target.value;
  console.log(value)
};

const domInterations = (() => {
  
  const { ratingDivs } = { ...domElements };

  ratingDivs.forEach(div => div.addEventListener("click", getValue))
})();
