const domElements = (() => {
  const ratingDivs = document.querySelectorAll("input");
  const cardFront = document.querySelector(".front");
  const cardBack = document.querySelector(".back");
  const submitBtn = document.querySelector(".submit-btn");

  return { ratingDivs, cardFront, cardBack, submitBtn };
})();


const getValue = function(ratingDivs) {
  let value;
  ratingDivs.forEach(div => {
    (div.checked) ? value = div.value : null;   
  })
  return value;
};


const changeCheckedInputStyle= function(inputDiv) {
  inputDiv.classList.toggle("checked");
};


const hideCardFace = function(front, back) {
  front.classList.toggle("scale-to-zero");
  back.classList.toggle("scale-to-zero");
};


const displayBack = function(back, value) {
  back.children[0].children[1].textContent = `You selected ${value} out of 5`;  
};


const domInterations = (() => {
  const { ratingDivs, cardFront, cardBack, submitBtn } = { ...domElements };

  ratingDivs.forEach(div => {
    (div.checked) ? changeCheckedInputStyle(div) : null;
  });
  
  submitBtn.addEventListener("click", e => {
      const rating = getValue(ratingDivs);
      hideCardFace(cardFront, cardBack);
      displayBack(cardBack, rating);
  });
})();
