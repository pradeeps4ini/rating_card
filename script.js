const domElements = (() => {
  const ratingDivs = document.querySelectorAll("input");
  const cardFront = document.querySelector(".front");
  const cardBack = document.querySelector(".back");
  const submitBtn = document.querySelector(".submit-btn");

  return { ratingDivs, cardFront, cardBack, submitBtn };
})();


const getLabel = function(input) {
  const className = input.classList[0];
  const label = document.querySelector(`label.${className}`);
  return label;
};


const getValue = function(ratingDivs) {
  let value;
  ratingDivs.forEach(div => {
    (div.checked) ? value = div.value : null;   
  })
  return value;
};


const removeCheckedStyle = function(ratingDivs, e) {
  
  ratingDivs.forEach(div => {
    const label = getLabel(div); 

    if (label.classList.contains("unchecked")) {
      label.classList.toggle("unchecked");
    }

    if (label.classList.contains("checked") && div != e.target) {
      label.classList.toggle("checked");
      label.classList.toggle("unchecked");
    };
  });
};


const changeCheckedStyle = function(e) {
  const label = getLabel(e.target); 
  label.classList.toggle("checked");
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
    div.addEventListener("click", e => {
      removeCheckedStyle(ratingDivs, e);
      changeCheckedStyle(e);

    });
  });
  
  submitBtn.addEventListener("click", e => {
      const rating = getValue(ratingDivs);
      hideCardFace(cardFront, cardBack);
      displayBack(cardBack, rating);
  });
})();
